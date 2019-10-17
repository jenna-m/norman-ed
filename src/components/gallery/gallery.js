import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';


class Gallery extends React.Component {
    render() {
        // const for a random number 1-12
        const preCollegiateRandomNum = Math.floor(Math.random() * 12) + 1
        // const for a random number 13-20
        const undergradRandomNum = Math.floor(Math.random() * 8) + 13
        // const for a random number 21-73
        const postCollegiateRandomNum = Math.floor(Math.random() * 53) + 21

        const preCollegiateItem = galleryImages.map(item => {
            if (item.id === preCollegiateRandomNum) {
                return (
                    <div className="gallery-home-item-card" key={item.id}>
                        <div className="item-image">
                            <Link to={{ pathname:`/${item.category}` }}>
                                <img src={item.src[0]} alt={item.title} />
                            </Link>
                        </div>
                    </div>
                )
            }
            return null;
        })

        const undergradItem = galleryImages.map(item => {
            if (item.id === undergradRandomNum) {
                return (
                    <div className="gallery-home-item-card" key={item.id}>
                        <div className="item-image">
                            <Link to={{ pathname:`/${item.category}` }}>
                                <img src={item.src[0]} alt={item.title} />
                            </Link>
                        </div>
                    </div>
                )
            }
            return null;
        })

        const postCollegiateItem = galleryImages.map(item => {
            if (item.id === postCollegiateRandomNum) {
                return (
                    <div className="gallery-home-item-card" key={item.id}>
                        <div className="item-image">
                            <Link to={{ pathname:`/${item.category}` }}>
                                <img src={item.src[0]} alt={item.title} />
                            </Link>
                        </div>
                    </div>
                )
            }
            return null;
        })
        
        return (
            <div className="container">
                <h1>Gallery</h1>
                <div className="gallery-landing-container">
                    <div className="category-container">
                        <h2>Pre-collegiate</h2>
                        { preCollegiateItem }
                    </div>
                    <div className="category-container">
                        <h2>Undergrad</h2>
                        { undergradItem }
                    </div>
                    <div className="category-container">
                        <h2>Post-Collegiate</h2>
                        { postCollegiateItem }
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Gallery);