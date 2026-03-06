import React from 'react';
import './play.css';
import { Dice } from './dice';
import { placeBet } from '../../hooks/betLogic';

export function Play() {
  const [dieNum, setDieNum] = React.useState(0);
  const [dieVal, setDieVal] = React.useState(null);

  React.useEffect(() => {
    console.log("dieNum updated:", dieNum);
  }, [dieNum]);

  React.useEffect(() => {
    console.log("dieVal updated:", dieVal);
  }, [dieVal]);


  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="players-container">
        <div className="player-card">
          <div className="stat">
            <span className="win-count">147</span>
            <span className="player-name">John</span>
          </div>
          <div className="stat">
            <span className="previous-bet">Previous Bet: two 3's</span>
          </div>
          <div className="stat">
            <div className="dice-container">
              <div className="die face-unknown"></div>
              <div className="die face-unknown"></div>
              <div className="die face-unknown"></div>
            </div>
          </div>
        </div>
        <div className="player-card">
          <div className="stat">
            <span className="win-count">96</span>
            <span className="player-name">Sophie</span>
          </div>
          <div className="stat">
            <span className="previous-bet">Previous Bet: three 3's</span>
          </div>
          <div className="stat">
            <div className="dice-container">
              <div className="die face-unknown"></div>
              <div className="die face-unknown"></div>
            </div>
          </div>
        </div>
        <div className="player-card">
          <div className="stat">
            <span className="win-count">13</span>
            <span className="player-name">Ryan</span>
          </div>
          <div className="stat">
            <span className="previous-bet">Previous Bet: Awaiting bet...</span>
          </div>
          <div className="stat">
            <div className="dice-container">
              <div className="die face-unknown"></div>
              <div className="die face-unknown"></div>
              <div className="die face-unknown"></div>
              <div className="die face-unknown"></div>
            </div>
          </div>
        </div>
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
          <button id="bet-button" className="btn btn-warning">Place Bet</button>
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