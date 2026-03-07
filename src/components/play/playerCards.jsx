import React from "react";

import { Dice } from './dice.jsx'

export function PlayerCard({ name, wins, previousBet, dice, hidden = false }) {
  return (
    <div className="player-card">
      <div className="stat">
        <span className="win-count">{wins}</span>
        <span className="player-name">{name}</span>
      </div>

      <div className="stat">
        <span className="previous-bet">
          Previous Bet: {previousBet}
        </span>
      </div>

      <div className="stat">
        <div className="dice-container">
          {dice.map((value, i) => (
            <Dice key={i} value={value} hidden={hidden || value === null} />
          ))}
        </div>
      </div>
    </div>
  );
}