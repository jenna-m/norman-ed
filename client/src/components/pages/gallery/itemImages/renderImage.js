import React from 'react';


class RenderImage extends React.Component {
    render() {
        return (
            <div className="item-details-single-img">
                <img src={this.props.imageUrl} />
            </div>
        )
    }
}

export default RenderImage;