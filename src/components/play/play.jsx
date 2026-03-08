import React from 'react';
import './play.css';
import { Dice } from './dice';
import { placeBet } from '../../hooks/betLogic';
import { PlayerCard } from './playerCards'

export function Play() {

  const [gameState, setGameState] = React.useState(() => {
    // initial dice roll
    const botDice = Array(5).fill().map(() => Math.floor(Math.random() * 6) + 1);
    const humanDice = Array(5).fill().map(() => Math.floor(Math.random() * 6) + 1);
    return {
      players: [
        {
          id: 0,
          name: "Bot John",
          wins: 0,
          dice: botDice,
          previousBet: 'none',
        },
        {
          id: 1,
          name: "Me",
          wins: 3,
          dice: humanDice,
          previousBet: 'none',
        }
      ],
      currentPlayer: 1,
      currentBet: {
        count: null,
        value: null
      },
      round: 1,
      gameOver: false,
      winner: null
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

  // handle bot's turn
  React.useEffect(() => {
    if (gameState.gameOver) return;
    if (gameState.currentPlayer === 0) {
      // bot's turn
      const timer = setTimeout(() => {
        botMakeDecision();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameState.currentPlayer, gameState.gameOver]);

  // new round
  const startNewRound = () => {
    // create new dice arrays
    const newBotDice = Array(gameState.players[0].dice.length).fill().map(() => Math.floor(Math.random() * 6) + 1);
    const newHumanDice = Array(gameState.players[1].dice.length).fill().map(() => Math.floor(Math.random() * 6) + 1);

    // assign dice, reset bet, human starts round, increment round #
    setGameState(prev => ({
      ...prev,
      players: prev.players.map(p =>
        p.id === 0 ? { ...p, dice: newBotDice, previousBet: 'none'} :
        p.id === 1 ? { ...p, dice: newHumanDice, previousBet: 'none'} : p
      ),
      currentBet: { count: null, value: null },
      currentPlayer: 1,
      round: prev.round + 1,
    }));
    setDieNum(0);
    setDieVal(null);
  };

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
          i === prev.currentPlayer
            ? { ...p, previousBet: `${dieNum} ${dieVal}'s` }
            : p
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
    // human calls bluff
    resolveCallBluff(1);
  }

  const botMakeDecision = () => {
    // bot call's bluff 30% of the time, makes bet 70%
    const shouldCall = Math.random() < 0.3;
    if (shouldCall) {
      // bot calls bluff
      resolveCallBluff(0);
    } else {
      const { count, value } = gameState.currentBet;
      const totalDice = gameState.players.reduce((sum, p) => sum + p.dice.length, 0);
      let botNum, botVal;
      if (count < totalDice) {  // if current count < total dice, increment dieNum
        botNum = count + 1;
        botVal = value;
      } else if (value < 6) {   // if current val < 6, increment dieVal
        botNum = count;
        botVal = value + 1;
      } else {                  // must call bluff
        resolveCall(0);
        return;
      }
      // update gameState with bot's bet, update playerCard with previous bet, set currentPlayer to human
      setGameState(prev => ({
        ...prev,
        currentBet: { count: botNum, value: botVal },
        players: prev.players.map(p =>
          p.id === prev.currentPlayer
          ? { ...p, previousBet: `${botNum} ${botVal}'s` }
          : p
        ),
        currentPlayer: 1,
      }));
    }
  };


  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="players-container">
        {gameState.players.map(player => (
          <PlayerCard
            key={player.id}
            name={player.name}
            wins={player.wins}
            previousBet={player.previousBet}
            dice={player.dice}
          />
        ))}
      </div>
      <div className="bet-interface">
        <h3>Make Your Bet!</h3>
        <div className="bet-form">
          <div className="form-group">
            <label>Number of Dice:</label>
            <input 
              type="number"
              id="dice-number"
              min="1"
              max="20"
              value={dieNum}
              onChange={(e) => setDieNum(Number(e.target.value))}/>
          </div>
          <div className="form-group">
            <label>Die Value:</label>
            <div className="die-selector">
              {[1,2,3,4,5,6].map(value => (
                <Dice
                  key={value}
                  value={value}
                  selected={dieVal === value}
                  onClick={() => setDieVal(value)}
                />
              ))}
            </div>
          </div>
          <button
            id="bet-button"
            className="btn btn-warning"
            onClick={handlePlaceBet}
          >
            Place Bet
          </button>
        </div>
      </div>
      
      <div className="player-card">
        <div className="stat">
          <span className="win-count">3</span>
          <span className="player-name">Me</span>
        </div>
        <div className="stat">
          <span className="previous-bet">Previous Bet: two 2's</span>
        </div>
        <div className="stat">
          <div className="dice-container">
            <div className="die face-2">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="die face-2">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="die face-3">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="die face-5">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="die face-6">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}