import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <ul className="nav_ul">
                <li className="navLink" id="logo">
                    <Link to="/"><img src="http://localhost:3000/images/logowhite.png" height="40" alt="logo" /></Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/topstories">Breaking News</Link>
                </li>
                <li className="navLink" id="text">
                    <a href="/topstories">News Summarizer</a>
                </li>
                <li className="navLink" id="text">
                    <a href="http://127.0.0.1:8050/">Stock Prediction</a>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;
