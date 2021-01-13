// When creating a new gallery, remember to add to routes.js as well
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { galleryImages } from '../../constants/gallery/galleryDatabase';

class Gallery extends React.Component {
	render() {
		// (1970-1977) const for a random number 1-12 + 1
		const gallery1RandomNum = Math.floor(Math.random() * 13) + 1;
		// (1978-1981) const for a random number 13-20 + 13 (total num of ID's passed)
		const gallery2RandomNum = Math.floor(Math.random() * 8) + 13;
		// (1980-1999) const for a random number 21-73 + 21 (total num of ID's passed)
		const gallery3RandomNum = Math.floor(Math.random() * 53) + 21;
		// (2000-2019) const for a random number 74-84 + 74 (total num of ID's passed)
		const gallery4RandomNum = Math.floor(Math.random() * 10) + 74;
		// (2020-Present) const for a random number 89-92 + 89 (total num of ID's passed)
		const gallery5RandomNum = Math.floor(Math.random() * 3) + 89;

		/* var const name needs to be changed; also create the same for another
		gallery AND don't forget to change the random numbers to reflect the
		years of the IDs */
		const gallery1Item = galleryImages.map(item => {
			if (item.id === gallery1RandomNum) {
				return (
					<div className="gallery-home-item-card" key={item.id}>
						<div className="item-image">
							<Link to={{ pathname: `/${item.category}` }}>
								<img src={item.src[0]} alt={item.title} />
							</Link>
						</div>
					</div>
				);
			}
			return null;
		});

		const gallery2Item = galleryImages.map(item => {
			if (item.id === gallery2RandomNum) {
				return (
					<div className="gallery-home-item-card" key={item.id}>
						<div className="item-image">
							<Link to={{ pathname: `/${item.category}` }}>
								<img src={item.src[0]} alt={item.title} />
							</Link>
						</div>
					</div>
				);
			}
			return null;
		});

		const gallery3Item = galleryImages.map(item => {
			if (item.id === gallery3RandomNum) {
				return (
					<div className="gallery-home-item-card" key={item.id}>
						<div className="item-image">
							<Link to={{ pathname: `/${item.category}` }}>
								<img src={item.src[0]} alt={item.title} />
							</Link>
						</div>
					</div>
				);
			}
			return null;
		});

		const gallery4Item = galleryImages.map(item => {
			if (item.id === gallery4RandomNum) {
				return (
					<div className="gallery-home-item-card" key={item.id}>
						<div className="item-image">
							<Link to={{ pathname: `/${item.category}` }}>
								<img src={item.src[0]} alt={item.title} />
							</Link>
						</div>
					</div>
				);
			}
			return null;
		});

		const gallery5Item = galleryImages.map(item => {
			if (item.id === gallery5RandomNum) {
				return (
					<div className="gallery-home-item-card" key={item.id}>
						<div className="item-image">
							<Link to={{ pathname: `/${item.category}` }}>
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
				<h1>Gallery</h1>
				<div className="gallery-landing-container">
					<div className="category-container">
						<h2>1970-1977</h2>
						{gallery1Item}
					</div>
					<div className="category-container">
						<h2>1978-1981</h2>
						{gallery2Item}
					</div>
					{/* following consts need to be changed and renamed, like the ones above */}
					<div className="category-container">
						<h2>1980-1999</h2>
						{gallery3Item}
					</div>
					<div className="category-container">
						<h2>2000-2019</h2>
						{gallery4Item}
					</div>
					<div className="category-container">
						<h2>2020-Present</h2>
						{gallery5Item}
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Gallery);
