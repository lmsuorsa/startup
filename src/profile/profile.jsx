import React from 'react';

export function Profile() {
  return (
    <main className="bg-light text-dark">
        <div className="titleAndTable">
            <h2>Player A</h2>
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2025-09-20</td>
                        <td>12:34</td>
                        <td>#5</td>
                    </tr>
                    <tr>
                        <td>2025-09-18</td>
                        <td>09:48</td>
                        <td>#2</td>
                    </tr>
                    <tr>
                        <td>2025-09-15</td>
                        <td>15:20</td>
                        <td>#10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}