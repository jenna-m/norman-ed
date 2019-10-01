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
                    <li>
                        <li className="menu-category"><NavLink to="/gallery">Gallery</NavLink></li>
                        <ul className="dropdown">
                            <li className="sublink"><NavLink to="/pre-collegiate">Pre-collegiate</NavLink></li>
                            <li className="sublink"><NavLink to="/undergrad">Undergrad</NavLink></li>
                            <li className="sublink"><NavLink to="/post-collegiate">Post-collegiate</NavLink></li>    
                        </ul>
                    </li>
                    <li className="menu-category"><NavLink to="/exhibitions">Exhibitions</NavLink></li>
                    <li className="menu-category"><NavLink to="/press">Press</NavLink></li>
                    <li>
                        <li className="menu-category"><NavLink to="/bio">About</NavLink></li>
                        <ul className="dropdown">
                            <li className="sublink"><NavLink to="/bio">Biography</NavLink></li>
                            <li className="sublink"><NavLink to="/artist-statement">Artist Statement</NavLink></li>    
                        </ul>
                    </li>
                    <li className="menu-category"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;