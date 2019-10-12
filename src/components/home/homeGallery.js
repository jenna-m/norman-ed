// Renders image tiles on home page
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';
import StackGrid, { transitions } from 'react-stack-grid';

const { fadeUp } = transitions;

class HomeGallery extends React.Component {
    render() {
        let group1 = galleryImages.map(item => {
            if (item.id === 67 || item.id === 31) {
                return (
                    <div className="home-gallery-card" key={item.id}>
                        <div className="home-gallery-image">
                            <Link to = {{ 
                                pathname:`/art`,
                                search: `?id=${item.id}`
                            }}
                            >
                                <img src={item.src[0]} alt={item.title} />
                            </Link>
                        </div>
                    </div>
                )    
            }
        })

        let group2 = galleryImages.map(item => {
            if (item.id === 16 || item.id === 45) {
                return (
                    <div className="home-gallery-card" key={item.id}>
                        <div className="home-gallery-image">
                            <Link to = {{ 
                                pathname:`/art`,
                                search: `?id=${item.id}`
                            }}
                            >
                                <img src={item.src[0]} alt={item.title} />
                            </Link>
                        </div>
                    </div>
                )    
            }
        })

        let group3 = galleryImages.map(item => {
            if (item.id === 69 || item.id === 53) {
                return (
                    <div className="home-gallery-card" key={item.id}>
                        <div className="home-gallery-image">
                            <Link to = {{ 
                                pathname:`/art`,
                                search: `?id=${item.id}`
                            }}
                            >
                                <img src={item.src[0]} alt={item.title} />
                            </Link>
                        </div>
                    </div>
                )    
            }
        })
        return (
            <StackGrid 
                columnWidth={250}
                appearDelay={500}
                gutterWidth={40}
                gutterHeight={40}
                duration={1000}
                appear={fadeUp.appear}
                appeared={fadeUp.appeared}
                enter={fadeUp.enter}
                entered={fadeUp.entered}
                leaved={fadeUp.leaved}
                monitorImagesLoaded={true}
            >
                <div className="home-gallery-card" key="1">Artist</div>
                { group1 }
                <div className="home-gallery-card" key="2">Builder</div>
                { group2 }
                <div className="home-gallery-card" key="3">Teacher</div>
                { group3 }
                <div className="home-gallery-card" key="4">Norman.</div>
            </StackGrid>
        );
    }
}

export default withRouter(HomeGallery);