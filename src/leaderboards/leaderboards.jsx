import React from 'react';
import "./leaderboards.css"

export function Leaderboards() {
  return (
    <main className="bg-light text-dark">
      <div className="titleAndTable">
          <h2>Leaderboards</h2>
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
      </div>
    </main>
  );
}