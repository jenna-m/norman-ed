import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../constants/logo.png';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar" role="navigation" aria-label="Main">
                <div className="logo">
                    <NavLink to="/">
                        <img src={logo} alt="Norman Ed Logo" />
                    </NavLink>
                </div>
                <ul className="menu">
                    <li className="menu-link">
                        <NavLink to="/gallery" activeClassName="chosen">Gallery</NavLink>
                        <div class="slider"></div>
                    </li>
                    <li className="menu-link">
                        <NavLink to="/exhibitions" activeClassName="chosen">Exhibitions</NavLink>
                        <div class="slider"></div>
                    </li>
                    <li className="menu-link">
                        <NavLink to="/press" activeClassName="chosen">Press</NavLink>
                        <div class="slider"></div>
                    </li>
                    <li className="menu-link">
                        <NavLink to="/about" activeClassName="chosen">About</NavLink>
                        <div class="slider"></div>
                    </li>
                    <li className="menu-link">
                        <NavLink to="/contact" activeClassName="chosen">Contact</NavLink>
                        <div class="slider"></div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;