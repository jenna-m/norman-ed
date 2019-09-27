import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Import page components
import Home from '../components/pages/home';
import Bio from '../components/about/bio';
import ArtistStatement from '../components/about/artistStatement';
import Gallery from '../components/gallery/gallery';
import AllWork from '../components/gallery/allWork';
import PreCollegiate from '../components/gallery/preCollegiate';
import Undergrad from '../components/gallery/undergrad';
import PostToPresent from '../components/gallery/postToPresent';
import Item from '../components/gallery/item';
import Exhibitions from '../components/pages/exhibitions';
import Press from '../components/pages/press';
import Contact from '../components/pages/contact';
import NotFound from '../components/pages/404';

export const Routes = 
    <div>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/bio" component={ Bio }/>
            <Route path="/artist-statement" component={ ArtistStatement }/>
            <Route path="/gallery" component={ Gallery }/>
            <Route path="/all-work" component={ AllWork }/>
            <Route path="/pre-collegiate" component={ PreCollegiate }/>
            <Route path="/undergrad" component={ Undergrad }/>
            <Route path="/post-present" component={ PostToPresent }/>
            <Route path="/art" component={ Item }/>
            <Route path="/exhibitions" component={ Exhibitions }/>
            <Route path="/press" component={ Press }/>
            <Route path="/contact" component={ Contact }/>
            <Route component={ NotFound }/>
        </Switch>
    </div>