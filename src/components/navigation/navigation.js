import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import MediaQuery from 'react-responsive'

class Navigation extends React.Component {
    render() {
        return (
            <div>
                {/* Render dropdown when screen size is max 899px wide */}
                <MediaQuery maxWidth={899}>
                    <Sidebar />
                </MediaQuery>

                {/* Render Navbar when screen size is at least 900px wide */}
                <MediaQuery minWidth={900}>
                    <Navbar />
                </MediaQuery>
            </div>
        )
    }
}

export default Navigation;