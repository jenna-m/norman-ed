// Renders all works, ordered by date
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../../constants/gallery/galleryDatabase';


class Gallery extends React.Component {
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
                <h1>Gallery</h1>
                <div className="gallery-menu">
                    <ul>
                        <li>Pre-collegiate</li>
                        <li>Undergrad</li>
                        <li>Post-collegiate</li>
                    </ul>
                </div>
                <div className="gallery-container">
                    { allWork }
                </div>
            </div>
        );
    }
}

export default withRouter(Gallery);