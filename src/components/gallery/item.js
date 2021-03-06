import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages, galleryCount } from '../../constants/gallery/galleryDatabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePrev = () => {
        const prevItemID = this.state.item.id - 1;
        this.setState({ item: galleryImages.find(item => item.id === prevItemID) });
    };

    handleNext = () => {
        const nextItemID = this.state.item.id + 1;
        this.setState({ item: galleryImages.find(item => item.id === nextItemID) });
    };

    render() {
        const item = this.state.item;

        // prev and next item IDs
        const prevItemID = item.id - 1;
        const nextItemID = item.id + 1;


        const showButtons = () => {
            if (item.id === 1) {
                return (
                    // Prev/Next buttons are currently hidden with CSS
                    <div className="prev-next-buttons">
                        {/* next item button */}
                        <Link to = {{ 
                            pathname:`/art`,
                            search: `?id=${nextItemID}`
                            }} 
                            onClick={this.handleNext} >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </div>
                );
            } else if (item.id === galleryCount) {
                return (
                    <div className="prev-next-buttons">
                        {/* previous item button */}
                        <Link to = {{ 
                            pathname:`/art`,
                            search: `?id=${prevItemID}`
                            }} 
                            onClick={this.handlePrev} >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </Link>
                    </div>
                );
            } else {
                return (
                    <div className="prev-next-buttons">
                        {/* previous item button */}
                        <Link to = {{ 
                            pathname:`/art`,
                            search: `?id=${prevItemID}`
                            }} 
                            onClick={this.handlePrev} >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </Link>
                        {/* next item button */}
                        <Link to = {{ 
                            pathname:`/art`,
                            search: `?id=${nextItemID}`
                            }} 
                            onClick={this.handleNext} >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </div>
                );
            }
        }
        
        return (
            <div className="container">
                <div className="item-details" key={item.id}>
                    <ItemImages />
                    <div className="item-details-info">
                        <div className="breadcrumb">
                            <ul>
                                <li><Link to='/gallery'>Gallery</Link></li>
                                <li><Link to={`/${item.category}`}>{item.category}</Link></li>
                            </ul>
                        </div>
                        <h1 className="item-title">{item.title}</h1>
                        <p>{item.date}</p>
                        <p>{item.media}</p>
                        <p>{item.dimensions}</p>
                        { showButtons() }
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Item);