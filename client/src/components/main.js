import React from 'react';
import { 
    Route,
    NavLink,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';

import Navbar from './navbar';
import Footer from './footer';
import Home from './pages/home';
import Bio from './pages/bio';
import ArtistStatement from './pages/artistStatement';
import Gallery from './pages/gallery';
import Exhibits from './pages/exhibits';
import Press from './pages/press';
import Contact from './pages/contact';
import NotFound from './pages/404';

class Main extends React.Component {
    render() {
        return (
            <Router>
                <Navbar />
                <div>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/bio" component={ Bio }/>
                    <Route path="/artist-statement" component={ ArtistStatement }/>
                    <Route path="/gallery" component={ Gallery }/>
                    <Route path="/exhibits" component={ Exhibits }/>
                    <Route path="/press" component={ Press }/>
                    <Route path="/contact" component={ Contact }/>
                    <Route path="/404" component={ NotFound }/>
                </div>
                <Footer />
            </Router>
        );
    }
}

export default Main;