// Renders all works with the category '1978-1981' (i.e. undergrad works)
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';

class Gallery2 extends React.Component {
	render() {
		let gallery2Work = galleryImages.map(item => {
			if (item.category === '1978-1981') {
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
				<h1>1978-1981</h1>
				<div className="gallery-container">{gallery2Work}</div>
			</div>
		);
	}
}

export default withRouter(Gallery2);
