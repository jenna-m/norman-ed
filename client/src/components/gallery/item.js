import React from 'react';
import { withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';


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
        let item = this.state.item;
        return (
            <div className="container">
                <h1>{item.title}</h1>
                <div className="item-details" key={item.id}>
                    <div className="item-details-img">
                        <img src={item.src[0]} alt={item.title} />
                    </div>
                    <div className="item-details-info">
                        <p>{item.date}</p>
                        <p>{item.media}</p>
                        <p>{item.dimensions}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Item);