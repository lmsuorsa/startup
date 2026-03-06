import React from 'react';
import './play.css';

export function Play() {
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
            <input type="number" id="dice-number" min="1" max="20" value="1" />
          </div>
          <div className="form-group">
            <label>Die Value:</label>
            <div className="die-selector">
              <div className="die face-1" data-value="1">
                <span className="dot"></span>
              </div>
              <div className="die face-2" data-value="2">
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="die face-3" data-value="3">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="die face-4" data-value="4">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="die face-5" data-value="5">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="die face-6" data-value="6">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
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