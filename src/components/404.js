import React from 'react';
import RandomImage from './randomImage/randomImage';

class NotFound extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>404 / Not Found</h1>
                <div className="_404-container">
                    <p>Sorry, that page can't be found.</p>
                    <RandomImage />
                </div>
            </div>
        );
    }
}

export default NotFound;