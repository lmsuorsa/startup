import React from 'react';
import './play.css';
import { Dice } from './dice';
import { PlayerCard } from './playerCards';
import { loadStats, saveStats } from '../../utils/storage';

export function Play(props) {
  const userName = props.userName;
  const savedStats = loadStats();

  const [gameState, setGameState] = React.useState(() => {
    // initial dice roll
    const botDice = Array(5).fill().map(() => Math.floor(Math.random() * 6) + 1);
    const humanDice = Array(5).fill().map(() => Math.floor(Math.random() * 6) + 1);
    return {
      players: [
        { id: 0, name: "Bot John", wins: savedStats.bot, dice: botDice, previousBet: 'none', },
        { id: 1, name: userName, wins: savedStats.human, dice: humanDice, previousBet: 'none', }
      ],
      currentPlayer: 1,
      currentBet: { count: null, value: null },
      round: 1,
      gameOver: false,
      winner: null,
      showResult: false,
      pendingLoser: null
    }
  });

  const [dieNum, setDieNum] = React.useState(0);
  const [dieVal, setDieVal] = React.useState(null);

  // debug statements for dieNum, dieVal
  React.useEffect(() => {
    console.log("dieNum updated:", dieNum);
  }, [dieNum]);
  React.useEffect(() => {
    console.log("dieVal updated:", dieVal);
  }, [dieVal]);

  React.useEffect(() => {
    const stats = {
      bot: gameState.players.find(p => p.id === 0)?.wins || 0,
      human: gameState.players.find(p => p.id === 1)?.wins || 0
    };
    saveStats(stats);
  }, [gameState.players]);

  // handle bot's turn
  React.useEffect(() => {
    if (gameState.gameOver || gameState.showResult) return;
    if (gameState.currentPlayer === 0) {
      // bot's turn
      const timer = setTimeout(() => botMakeDecision(), 1000);
      return () => clearTimeout(timer);
    }
  }, [gameState.currentPlayer, gameState.gameOver, gameState.showResult]);

  // show results for 3 seconds, then advance to next round
  React.useEffect(() => {
    if (gameState.showResult && !gameState.gameOver && gameState.pendingLoser !== null) {
      const timer = setTimeout(() => {
        setGameState(prev => {
          let updatedPlayers = prev.players.map(p => {
            if (p.id === prev.pendingLoser) {
            return { ...p, dice: p.dice.slice(0, -1) }; // remove last die from loser's array
          }
          return p;
          });

          // if human or bot have 0 remaining dice, end game
          const gameOver = updatedPlayers.some(p => p.dice.length === 0);
          if (gameOver) {
            // store id of player who still has dice in winnerId
            const winnerId = updatedPlayers.find(p => p.dice.length > 0)?.id;
            updatedPlayers = updatedPlayers.map(p => {
              if (p.id === winnerId) {
                return { ...p, wins: p.wins + 1 };
              }
              return p;
            });
            return {
              ...prev,
              players: updatedPlayers,
              gameOver: true,
              winner: winnerId,
              showResult: false,
              pendingLoser: null
            };
          } else {
            const newPlayers = updatedPlayers.map(p => ({
              ...p,
              dice: p.dice.map(() => Math.floor(Math.random() * 6) + 1),
              previousBet: 'none'
            }));
            return {
              ...prev,
              players: newPlayers,
              currentBet: { count: null, value: null },
              currentPlayer: 1,
              round: prev.round + 1,
              showResult: false,
              pendingLoser: null
            };
          }
        });
        setDieNum(0);
        setDieVal(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [gameState.showResult, gameState.gameOver, gameState.pendingLoser]);

  // handle human bet
  const handlePlaceBet = () => {
    if (gameState.currentPlayer !== 1) {
      alert("Not your turn!");
      return;
    }
    if (!dieNum || !dieVal) {
        alert("Please select a number and value.");
        return;
    }
    const { currentBet } = gameState;
    if (currentBet.count !== null) {
      if (dieNum < currentBet.count || (dieNum === currentBet.count && dieVal <= currentBet.value)) {
        alert("Must bet higher than current bet (higher count, or same count with higher value).");
        return;
      }
    }
    // if bet is valid, update gameState with newBet, update "previous bet" field for Player Card, set currentPlayer to bot
    setGameState(prev => {
      const newBet = { count: dieNum, value: dieVal };
      return {
        ...prev,
        currentBet: newBet,
        players: prev.players.map((p, i) =>
          i === prev.currentPlayer? { ...p, previousBet: `${dieNum} ${dieVal}'s` } : p
        ),
        currentPlayer: 0,
      };
    });
    // reset input fields after placing bet
    setDieNum(0);
    setDieVal(null);
  }

  const handleCallBluff = () => {
    if (gameState.currentPlayer !== 1) {
      alert("Not your turn!");
      return;
    }
    if (!gameState.currentBet.count) {
      alert("No bet to call.");
      return;
    }
    resolveCallBluff(1);  // human calls bluff
  }

  const botMakeDecision = () => {
    const { currentBet, players } = gameState;
    const totalDice = players.reduce((sum, p) => sum + p.dice.length, 0);

    // first bet
    if (currentBet.count === null) {
      const botNum = Math.floor(Math.random() * totalDice) + 1;
      const botVal = Math.floor(Math.random() * 6) + 1;
      setGameState(prev => ({
        ...prev,
        currentBet: { count: botNum, value: botVal },
        players: prev.players.map(p =>
          p.id === prev.currentPlayer ? { ...p, previousBet: `${botNum} ${botVal}'s` } : p
        ),
        currentPlayer: 1
      }));
      return;
    }

    // bot call's bluff 30% of the time, makes bet 70%
    const shouldCall = Math.random() < 0.3;
    if (shouldCall) {
      resolveCallBluff(0);  // bot calls bluff
    } else {
      const { count, value } = gameState.currentBet;
      const totalDice = gameState.players.reduce((sum, p) => sum + p.dice.length, 0);
      let botNum, botVal;
      if (count < totalDice) {  // if current count < total dice, make a bet
        if (value < 6) {        // if value < 6, dieVal++
          botNum = count;
          botVal = value + 1;
        } else {                // else, increment dieNum++
        botNum = count + 1;
        botVal = value;
        }
      } else {                  // currentBet is maximum possible, must call bluff
        resolveCallBluff(0);
        return;
      }
      // update gameState with bot's bet, update playerCard with previous bet, set currentPlayer to human
      setGameState(prev => ({
        ...prev,
        currentBet: { count: botNum, value: botVal },
        players: prev.players.map(p =>
          p.id === prev.currentPlayer ? { ...p, previousBet: `${botNum} ${botVal}'s` } : p
        ),
        currentPlayer: 1,
      }));
    }
  };

  const resolveCallBluff = (callerId) => {
    const { currentBet, players } = gameState;
    const betValue = currentBet.value;
    let totalCount = 0;
    // count all dice with dieVal, increment totalCount with each found
    players.forEach(p => {
      p.dice.forEach(v => { if (v === betValue) totalCount++; });
    });
    const betCount = currentBet.count;
    const bettorId = callerId === 0 ? 1 : 0;
    // if betCount >= totalCount, caller loses. if betCount < totalCount, bettor loses
    const loserId = totalCount >= betCount ? callerId : bettorId;

    setGameState(prev => ({
      ...prev,
      currentBet: { count: null, value: null },
      pendingLoser: loserId,
      showResult: true
      }));
      setDieNum(0);
      setDieVal(null);
    };

  const resetGame = () => {
    const userName = localStorage.getItem('userName') || 'Me';
    setGameState(prev => {
      const currentBotWins = prev.players.find(p => p.id === 0)?.wins || 0;
      const currentHumanWins = prev.players.find(p => p.id === 1)?.wins || 0;
      return {
        players: [
          { id: 0, name: "Bot John", wins: currentBotWins, dice: Array(5).fill().map(() => Math.floor(Math.random() * 6) + 1), previousBet: 'none' },
          { id: 1, name: userName, wins: currentHumanWins, dice: Array(5).fill().map(() => Math.floor(Math.random() * 6) + 1), previousBet: 'none' }
        ],
        currentPlayer: 1,
        currentBet: { count: null, value: null },
        round: 1,
        gameOver: false,
        winner: null,
        showResult: false,
        pendingLoser: null
      };
    });
    setDieNum(0);
    setDieVal(null);
  };


  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="players-container">
        {gameState.players
          .filter(player => player.id === 0)
          .map(bot => (
            <PlayerCard
              key={bot.id}
              name={bot.name}
              wins={bot.wins}
              previousBet={bot.previousBet}
              dice={bot.dice}
              hidden={!(gameState.showResult || gameState.gameOver)}
            />
        ))}
      </div>
      {!gameState.showResult && !gameState.gameOver && (
        <div className="bet-interface">
          <h3>Make Your Bet! (Round {gameState.round})</h3>
          <div className="bet-form">
            <div className="form-group">
              <label>Number of Dice:</label>
              <input 
                type="number"
                id="dice-number"
                min="1"
                max={gameState.players.reduce((sum, p) => sum + p.dice.length, 0)}
                value={dieNum}
                onChange={(e) => setDieNum(Number(e.target.value))}
                disabled={gameState.currentPlayer !== 1}
              />
            </div>
            <div className="form-group">
              <label>Die Value:</label>
              <div className="die-selector">
                {[1,2,3,4,5,6].map(value => (
                  <Dice
                    key={value}
                    value={value}
                    selected={dieVal === value}
                    onClick={() => gameState.currentPlayer === 1 && setDieVal(value)}
                  />
                ))}
              </div>
            </div>
            <button
              id="bet-button"
              className="btn btn-warning"
              onClick={handlePlaceBet}
              disabled={gameState.currentPlayer !== 1}
            >
              Place Bet
            </button>
            <button
              id="call-button"
              className="btn btn-danger"
              onClick={handleCallBluff}
              disabled={gameState.currentPlayer !== 1 || !gameState.currentBet.count}
            >
              Call Bluff
            </button>
          </div>
        </div>
      )}

      {gameState.gameOver && (
        <div className="game-over">
          <h2>{gameState.players.find(p => p.id === gameState.winner)?.name} wins!</h2>
          <button onClick={resetGame} className="btn btn-warning">Play Again</button>
        </div>
      )}
      
      {gameState.players
        .filter(player => player.id === 1)
        .map(human => (
          <PlayerCard
            key={human.id}
            name={human.name}
            wins={human.wins}
            previousBet={human.previousBet}
            dice={human.dice}
            hidden={false}    // show human’s dice
          />
      ))}
      
    </main>
  );
}