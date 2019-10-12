import React from 'react';
import { galleryImages } from '../../../constants/gallery/galleryDatabase';
import RenderImage from './renderImage';


class ItemImages extends React.Component {
    constructor(props) {
        super(props);

        let currentItemId = new URLSearchParams(window.location.search).get("id");
        
        if (currentItemId) {
          currentItemId = parseInt(currentItemId, 10);
        }

        this.state = {
          item: galleryImages.find(item => item.id === currentItemId)
        };

      }

    render() {
        const item = this.state.item;

        // define array to be rendered by ItemImages component
        const itemImages = [];

        // forEach element in item.src...
        item.src.forEach( (src, i) => {
            /* pass props src and index to RenderImage component,
            and push to itemImages array */
            itemImages.push(<RenderImage imageUrl={src} key={i} />)
        });
        
        return (
          <div className="item-details-images">
            {itemImages}
          </div>
        );
    }
}

export default ItemImages;