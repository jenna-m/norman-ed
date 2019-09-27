import React from 'react';
import RandomImage from '../randomImage'; // something's broken w/ this

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-side-text">
                    <h1>Artist</h1>
                    <h1>Welder</h1>
                    <h1>Sculptor</h1>
                    <h1>Builder</h1>
                    <h1>Teacher</h1>
                </div>
                <div className="home-random-image">
                    <RandomImage />
                </div>
            </div>
        );
    }
}

export default Home;