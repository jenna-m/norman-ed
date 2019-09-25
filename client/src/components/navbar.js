import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar" role="navigation" aria-label="Main">
                <div className="menu">
                    <ul>
                        <li>About</li>
                        <li>Artist Statement</li>
                        <li>Gallery</li>
                        <li>Exhibits</li>
                        <li>Press</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;