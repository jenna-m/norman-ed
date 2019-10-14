import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import MediaQuery from 'react-responsive'

class Navigation extends React.Component {
    render() {
        return (
            <div>
                {/* Render dropdown when screen size is 768px wide*/}
                <MediaQuery maxDeviceWidth={767}>
                    <Sidebar />
                </MediaQuery>

                {/* Render Navbar when screen size is greater than 768px wide */}
                <MediaQuery minDeviceWidth={768}>
                    <Navbar />
                </MediaQuery>
            </div>
        )
    }
}

export default Navigation;