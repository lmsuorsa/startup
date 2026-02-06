import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  <div className="app bg-dark text-light">
    <header className="container-fluid">
      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="#">Liar's Dice<sup>&reg;</sup></a>
        <menu className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="play.html">Play</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <main>App components go here</main>

    <footer className="bg-dark text-white-50">
      <div className="container-fluid">
        <span className="text-reset">Luke Suorsa</span>
        <a className="text-reset" href="https://github.com/lmsuorsa/startup">Github</a>
      </div>
    </footer>
  </div>
  );
}