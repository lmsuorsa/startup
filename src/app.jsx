import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="app bg-dark text-light">
            <header className="bg-dark text-light container-fluid">
                <nav className="navbar fixed-top navbar-dark">
                    <a className="navbar-brand" href="#">CrossWordPuzz</a>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="play.html">Play</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="profile.html">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="leaderboards.html">Leaderboards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                    </menu>
                </nav>
            </header>
            <main className="bg-light text-dark">App components</main>
            <footer className="bg-dark text-white-50">
                <div className="container-fluid">
                    <span className="text-reset">Luke Suorsa</span>
                    <a className="text-reset" href="https://github.com/lmsuorsa/startup">GitHub</a>
                </div>
            </footer>
        </div>
    );
}