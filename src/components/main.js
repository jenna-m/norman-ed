import React from 'react';
import { 
    withRouter,
    Switch,
    BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from './navbar/navbar';
import Footer from './footer';
import ScrollToTop from './scrollToTop';
import { Routes } from '../constants/routes';


class Main extends React.Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Navbar />
                    <Switch>
                        { Routes }
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </Router>
        );
    }
}

export default withRouter(Main);