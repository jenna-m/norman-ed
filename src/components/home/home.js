import React from 'react';
import HomeGallery from './homeGallery';
import RandomImage from '../randomImage/randomImage';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <HomeGallery />
            </div>
        );
    }
}

export default Home;