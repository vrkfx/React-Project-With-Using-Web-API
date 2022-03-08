import './navbar.css'

import React from 'react';
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <header className="header">
            <div className='container-fluid'>
                <nav className="navbar sticky-top bg-dark ">
                        <ul className='navbar '>
                            <li className='editHome '>
                                <Link to="/" style={{ textDecoration: 'none', color:"White"} }> HOME </Link>
                            </li>
                            <li className='editWeather'>
                                <Link to="/weather" style={{ textDecoration: 'none' }}> WEATHER </Link>
                            </li>
                        </ul>
                </nav>
            </div>
        </header>
    );
}
export default navbar;