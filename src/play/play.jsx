import React from 'react';
import "./play.css"

export function Play() {
  return (
        <main className="bg-light text-dark">
            <div className="sidebar">
                <h3>Leaderboards</h3>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Rank</th>
                            <th className="gold">Player</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td className="silver">Player A</td>
                            <td>2:48</td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td className="bronze">Player B</td>
                            <td>2:59</td>
                        </tr>
                        <tr>
                            <td>#3</td>
                            <td>Player C</td>
                            <td>3:15</td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td>Player D</td>
                            <td>3:53</td>
                        </tr>
                        <tr>
                            <td>#5</td>
                            <td>Player E</td>
                            <td>3:56</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Current Racers</h3>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Player</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Player F</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td>Player G</td>
                            <td>35%</td>
                        </tr>
                        <tr>
                            <td>Player H</td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <td>Player I</td>
                            <td>7%</td>
                        </tr>
                        <tr>
                            <td>Player J</td>
                            <td>47%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="puzzleAndClues">
                <table className="crossword">
                    <tr>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="space"></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                    </tr>
                    <tr>
                        <td className="space"></td>
                        <td className="space"></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="space"></td>
                        <td className="space"></td>
                    </tr>
                    <tr>
                        <td className="space"></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="space"></td>
                        <td className="space"></td>
                        <td className="space"></td>
                        <td className="square"><input maxlength="1" /></td>
                    </tr>
                    <tr>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="space"></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                    </tr>
                    <tr>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                    </tr>
                    <tr>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="space"></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="space"></td>
                        <td className="space"></td>
                        <td className="square"><input maxlength="1" /></td>
                    </tr>
                    <tr>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="space"></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                        <td className="square"><input maxlength="1" /></td>
                    </tr>
                </table>
                <div className="clues">
                    <div className="clue-table">
                        <p className="clue-title">Across</p>
                        <ol className="across">
                            <li>Item A1</li>
                            <li>Item A2</li>
                            <li>Item A3</li>
                        </ol>
                    </div>
                    <div className="clue-table">
                        <p className="clue-title">Down</p>
                        <ol className="down">
                            <li>Item A1</li>
                            <li>Item A2</li>
                            <li>Item A3</li>
                        </ol>
                    </div>
                </div>
            </div>
        </main>
  );
}