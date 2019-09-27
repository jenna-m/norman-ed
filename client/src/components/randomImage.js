import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { random } from 'lodash';
import {
    galleryImages,
    galleryCount // total # of items in the gallery
} from '../constants/gallery/galleryDatabase';

class RandomImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: galleryImages
        }
    }

    render() {
        // Generate random image based on ID
        const randomImageID = random(galleryCount); // const for random image ID
        const randomImg = this.state.items.map(item => {
            if (item.id === randomImageID) {
                return (
                    <div className="random-image-component">
                        <Link to = {{ 
                            pathname:`/art`,
                            search: `?id=${item.id}`
                        }}
                        >
                            <img src={item.src[0]} alt={item.title} />
                        </Link>
                        <p>{item.title}, {item.date}</p>
                    </div>
                );
            }
        })
        return (
            <div>
                { randomImg }
            </div> 
        );
    }
}

export default withRouter(RandomImage);