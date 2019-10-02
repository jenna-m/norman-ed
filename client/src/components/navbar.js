import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar" role="navigation" aria-label="Main">
                <div className="logo">
                    <NavLink to="/">Norman Ed</NavLink>
                </div>
                <ul className="menu">
                    <li className="menu-category"><NavLink to="/gallery">Gallery</NavLink></li>
                    <li className="menu-category"><NavLink to="/exhibitions">Exhibitions</NavLink></li>
                    <li className="menu-category"><NavLink to="/press">Press</NavLink></li>
                    <li className="menu-category"><NavLink to="/about">About</NavLink></li>
                    <li className="menu-category"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;