import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Import page components
import Home from '../components/pages/home';
import Bio from '../components/pages/about/bio';
import ArtistStatement from '../components/pages/about/artistStatement';
import Gallery from '../components/pages/gallery/gallery';
import PreCollegiate from '../components/pages/gallery/preCollegiate';
import Undergrad from '../components/pages/gallery/undergrad';
import PostCollegiate from '../components/pages/gallery/postCollegiate';
import Item from '../components/pages/gallery/item';
import Exhibitions from '../components/pages/exhibitions';
import Press from '../components/pages/press';
import Contact from '../components/pages/contact/contact';
import NotFound from '../components/pages/404';

export const Routes = 
    <div>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/gallery" component={ Gallery } />
            <Route path="/pre-collegiate" component={ PreCollegiate } />
            <Route path="/undergrad" component={ Undergrad } />
            <Route path="/post-collegiate" component={ PostCollegiate } />
            <Route path="/art" component={ Item } />
            <Route path="/exhibitions" component={ Exhibitions } />
            <Route path="/press" component={ Press } />
            <Route path="/bio" component={ Bio } />
            <Route path="/artist-statement" component={ ArtistStatement } />
            <Route path="/contact" component={ Contact } />
            <Route component={ NotFound } />
        </Switch>
    </div>