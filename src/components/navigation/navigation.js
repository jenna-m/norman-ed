import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                {/* Render dropdown when screen size is 768px wide*/}
                <Sidebar />

                {/* Render Navbar when screen size is greater than 768px wide */}
                <Navbar />
            </div>
        )
    }
}

export default Navigation;