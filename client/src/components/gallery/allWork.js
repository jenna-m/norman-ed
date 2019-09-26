// Renders all works, ordered by date
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';
import Item from './item';

class AllWork extends React.Component {
    render() {
        let allWork = galleryImages.map(item => {
            return (
                <div className="item-card" key={item.id}>
                    <div className="item-image">
                        <Link to = {{ 
                            pathname:`/art`,
                            search: `?id=${item.id}`
                        }}
                        >
                            <img src={item.src[0]} alt={item.title} />
                        </Link>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <h1>All Work</h1>
                <div className="gallery-menu">
                    <ul>
                        <li>Pre-Collegiate</li>
                        <li>Undergrad</li>
                        <li>1982 - Present</li>
                    </ul>
                </div>
                <div className="gallery-container">
                    { allWork }
                </div>
            </div>
        );
    }
}

export default withRouter(AllWork);