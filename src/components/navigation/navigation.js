import React from 'react';
import Dropdown from './dropdown';
import Navbar from './navbar';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                {/* Render dropdown when screen size is 768px wide*/}
                <Dropdown />

                {/* Render Navbar when screen size is greater than 768px wide */}
                <Navbar />
            </div>
        )
    }
}

export default Navigation;