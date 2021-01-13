import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Import page components
import Home from '../components/home/home';
import About from '../components/about';
import Gallery from '../components/gallery/galleryLanding';
import Gallery1 from '../components/gallery/gallery1';
import Gallery2 from '../components/gallery/gallery2';
import Gallery3 from '../components/gallery/gallery3';
import Gallery4 from '../components/gallery/gallery4';
import Gallery5 from '../components/gallery/gallery5';
import Item from '../components/gallery/item';
import Exhibitions from '../components/exhibitions';
import Press from '../components/press';
import Contact from '../components/contact/contact';
import NotFound from '../components/404';

export const Routes = (
	<div>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/gallery" component={Gallery} />
			<Route path="/1970-1977" component={Gallery1} />
			<Route path="/1978-1981" component={Gallery2} />
			<Route path="/1980-1999" component={Gallery3} />
			<Route path="/2000-2019" component={Gallery4} />
			<Route path="/2020-Present" component={Gallery5} />
			<Route path="/art" component={Item} />
			<Route path="/exhibitions" component={Exhibitions} />
			<Route path="/press" component={Press} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route component={NotFound} />
		</Switch>
	</div>
);
