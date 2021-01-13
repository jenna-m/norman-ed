// Renders all works with the category '2020-Present'
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';

class Gallery5 extends React.Component {
	render() {
		let gallery5Work = galleryImages.map(item => {
			if (item.category === '2020-Present') {
				return (
					<div className="item-card" key={item.id}>
						<div className="item-image">
							<Link
								to={{
									pathname: `/art`,
									search: `?id=${item.id}`
								}}
							>
								<img src={item.src[0]} alt={item.title} />
							</Link>
						</div>
					</div>
				);
			}
			return null;
		});
		return (
			<div className="container">
				<h1>2020-Present</h1>
				<div className="gallery-container">{gallery5Work}</div>
			</div>
		);
	}
}

export default withRouter(Gallery5);
