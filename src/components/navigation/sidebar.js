import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../constants/logo.png';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    handleStateChange(state) {
        this.setState({
            menuOpen: state.isOpen
        })
    }

    closeMenu() {
        this.setState({
            menuOpen: false
        })
    }

    toggleMenu() {
        this.setState(state => ({
            menuOpen: !state.menuOpen
        }))
    }

    render() {
        return (
            <Menu
                disableAutoFocus
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
            >
                <div className="sidebar-logo">
                    <NavLink to="/" onClick={() => this.closeMenu()}>
                        <img src={logo} alt="Norman Ed Logo" />
                    </NavLink>
                </div>
                <ul className="menu">
                    <li className="menu-link">
                        <NavLink to="/gallery" onClick={() => this.closeMenu()}>Gallery</NavLink>
                    </li>
                    <li className="menu-link">
                        <NavLink to="/exhibitions" onClick={() => this.closeMenu()}>Exhibitions</NavLink>
                    </li>
                    <li className="menu-link">
                        <NavLink to="/press" onClick={() => this.closeMenu()}>Press</NavLink>
                    </li>
                    <li className="menu-link">
                        <NavLink to="/about" onClick={() => this.closeMenu()}>About</NavLink>
                    </li>
                    <li className="menu-link">
                        <NavLink to="/contact" onClick={() => this.closeMenu()}>Contact</NavLink>
                    </li>
                </ul>
            </Menu>
        );
    }
}

export default Sidebar;