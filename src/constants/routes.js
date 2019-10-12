import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Import page components
import Home from '../components/home/home';
import About from '../components/about';
import Gallery from '../components/gallery/gallery';
import PreCollegiate from '../components/gallery/preCollegiate';
import Undergrad from '../components/gallery/undergrad';
import PostCollegiate from '../components/gallery/postCollegiate';
import Item from '../components/gallery/item';
import Exhibitions from '../components/exhibitions';
import Press from '../components/press';
import Contact from '../components/contact/contact';
import NotFound from '../components/404';

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
            <Route path="/about" component={ About } />
            <Route path="/contact" component={ Contact } />
            <Route component={ NotFound } />
        </Switch>
    </div>