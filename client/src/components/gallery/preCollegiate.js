// Renders all works with the gallery 'pre'
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';


class PreCollegiate extends React.Component {
    render() {
        let preCollegiateWork = galleryImages.map(item => {
            if (item.category === 'pre-collegiate') {
                return (
                    <div className="item-card" key={item.id}>
                        <div className="item-image">
                            <Link to = {{ 
                                pathname:`/art`,
                                search: `?id=${item.id}`
                            }}>
                                <img src={item.src[0]} alt={item.title} />
                            </Link>
                        </div>
                    </div>
                )
            }
        })
        return (
            <div className="container">
                <h1>Pre-Collegiate</h1>
                <div className="gallery-container">
                    { preCollegiateWork }
                </div>
            </div>
        );
    }
}

export default withRouter(PreCollegiate);