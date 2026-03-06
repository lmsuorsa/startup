import React from 'react';
import './play.css';
import { Dice } from './dice';
import { placeBet } from '../../hooks/betLogic';
import { PlayerCard } from './playerCards'

export function Play() {
  const [dieNum, setDieNum] = React.useState(0);
  const [dieVal, setDieVal] = React.useState(null);

  React.useEffect(() => {
    console.log("dieNum updated:", dieNum);
  }, [dieNum]);

  React.useEffect(() => {
    console.log("dieVal updated:", dieVal);
  }, [dieVal]);

  function handlePlaceBet() {
    if (!dieNum || !dieVal) {
        console.log("invalid bet");
        return false;
    }
    console.log("Bet: ", "Num - ", dieNum, "Val - ", dieVal)
    placeBet(dieNum, dieVal);
  }

  const [gameState, setGameState] = React.useState({
    players: [
      {
        id: 1,
        name: "John",
        wins: 147,
        dice: [null, null, null],
        previousBet: "two 3's"
      },
      {
        id: 2,
        name: "Sophie",
        wins: 96,
        dice: [null, null],
        previousBet: "three 3's"
      },
      {
        id: 3,
        name: "Ryan",
        wins: 13,
        dice: [null, null, null, null],
        previousBet: null
      },
      {
        id: 4,
        name: "Me",
        wins: 3,
        dice: [2,2,3,5,6],
        previousBet: "two 2's"
      }
    ],

    currentPlayer: 3,

    currentBet: {
      count: null,
      value: null
    },

    round: 1
  });


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