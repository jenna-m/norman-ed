// Renders all works with the gallery 'undergrad'
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';

class Undergrad extends React.Component {
    render() {
        let undergradWork = galleryImages.map(item => {
            if (item.gallery === 'undergrad') {
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
                <h1>Undergrad</h1>
                <div className="gallery-container">
                    { undergradWork }
                </div>
            </div>
        );
    }
}

export default withRouter(Undergrad);