import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar" role="navigation" aria-label="Main">
                <div className="menu">
                    <ul>
                        <li><NavLink to="/bio">About</NavLink></li>
                        <li><NavLink to="/artist-statement">Artist Statement</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/exhibits">Exhibits</NavLink></li>
                        <li><NavLink to="/press">Press</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;