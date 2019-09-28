import React from 'react';
import { withRouter } from 'react-router-dom';
import { galleryImages } from '../../../constants/gallery/galleryDatabase';
import ItemImages from './itemImages/itemImages';


class Item extends React.Component {
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
        return (
            <div className="item-details" key={item.id}>
                <ItemImages />
                <div className="item-details-info">
                    <h1>{item.title}</h1>
                    <p>{item.date}</p>
                    <p>{item.media}</p>
                    <p>{item.dimensions}</p>
                </div>
            </div>
        );
    }
}

export default withRouter(Item);