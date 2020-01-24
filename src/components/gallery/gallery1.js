// Renders all works with the category '1970-1977' (i.e. pre-collegiate works)
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';

class Gallery1 extends React.Component {
	render() {
		let gallery1Work = galleryImages.map(item => {
			if (item.category === '1970-1977') {
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
				<h1>1970-1977</h1>
				<div className="gallery-container">{gallery1Work}</div>
			</div>
		);
	}
}

export default withRouter(Gallery1);
