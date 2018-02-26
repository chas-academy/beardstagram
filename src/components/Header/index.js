import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header = () => (
    <header className="App-header">
        <h1 className="App-header__logo">
            Beardstagram
        </h1>
        <nav>
            <ul className="App-header__nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/explore">Explore</Link>
                </li>
                <li>
                    <Link to="/signin">SignIn</Link>
                </li>
                <li>
                    <Link to="/signup">SignUp</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header;