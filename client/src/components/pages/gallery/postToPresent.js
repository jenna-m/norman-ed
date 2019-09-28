// Renders all works with the gallery 'post'
// Have sidebar with links for individual years
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../../constants/gallery/galleryDatabase';


class PostToPresent extends React.Component {
    render() {
        let postToPresentWork = galleryImages.map(item => {
            if (item.gallery === 'post') {
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
                <h1>1982 - Present</h1>
                <div className="gallery-container">
                    { postToPresentWork }
                </div>
            </div>
        );
    }
}

export default withRouter(PostToPresent);