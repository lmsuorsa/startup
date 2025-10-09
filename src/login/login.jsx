import React from 'react';
import "./login.css"

export function Login() {
  return (
    <main className="bg-light text-dark">
        <div>
            <h1>Welcome :)</h1>
            <form method="get" action="play.html">
                <div className="input-group mb-3">
                    <input className="form-control" type="text" placeholder="username" />
                </div>
                <div className="input-group mb-3">
                    <input className="form-control" type="password" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-primary me-2">Login</button>
                <button type="submit" className="btn btn-secondary">Create</button>
            </form>
        </div>
    </main>
  );
}