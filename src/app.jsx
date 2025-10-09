import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Profile } from './profile/profile';
import { Leaderboards } from './leaderboards/leaderboards';
import { About } from './about/about';

export default function App() {
    return (
        <BrowserRouter>
            <div className="app bg-dark text-light">
                <header className="bg-dark text-light container-fluid">
                    <nav className="navbar fixed-top navbar-dark">
                        <a className="navbar-brand" href="#">CrossWordPuzz</a>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className='nav-link' to=''>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='play'>Play</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='profile'>Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='leaderboards'>Leaderboards</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='about'>About</NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/play' element={<Play />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/leaderboards' element={<Leaderboards />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                
                <footer className="bg-dark text-white-50">
                    <div className="container-fluid">
                        <span className="text-reset">Luke Suorsa</span>
                        <a className="text-reset" href="https://github.com/lmsuorsa/startup">GitHub</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}