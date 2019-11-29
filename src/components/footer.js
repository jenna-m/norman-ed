import React from 'react';

class Footer extends React.PureComponent {
	render() {
		return (
			<div className="footer">
				<p>Artwork © Norman Ed 1975-2019</p>
				<p>
					Website development by{' '}
					<a
						href="https://jennamichaels.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						Jenna Michaels
					</a>
				</p>
			</div>
		);
	}
}

export default Footer;
