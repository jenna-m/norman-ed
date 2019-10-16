import React from 'react';


class RenderImage extends React.Component {
    render() {
        return (
            <div className="item-details-single-img">
                <img src={this.props.imageUrl} alt={this.props.alt} />
            </div>
        )
    }
}

export default RenderImage;