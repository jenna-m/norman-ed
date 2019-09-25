import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Import page components
import Home from '../components/pages/home';
import Bio from '../components/pages/bio';
import ArtistStatement from '../components/pages/artistStatement';
import Gallery from '../components/pages/gallery';
import Exhibits from '../components/pages/exhibits';
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
            <Route path="/exhibits" component={ Exhibits }/>
            <Route path="/press" component={ Press }/>
            <Route path="/contact" component={ Contact }/>
            <Route component={ NotFound }/>
        </Switch>
    </div>