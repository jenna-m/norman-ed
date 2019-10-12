// Renders all works with the gallery 'post'
// Have sidebar with links for individual years
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';


class PostCollegiate extends React.Component {
    render() {
        let postCollegiateWork = galleryImages.map(item => {
            if (item.category === 'post-collegiate') {
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
                <h1>Post-collegiate</h1>
                <div className="gallery-container">
                    { postCollegiateWork }
                </div>
            </div>
        );
    }
}

export default withRouter(PostCollegiate);