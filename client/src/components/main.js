import React from 'react';
import { 
    Route,
    NavLink,
    BrowserRouter as Router,
} from 'react-router-dom';

import Navbar from './navbar';
import Footer from './footer';
import { Routes } from '../constants/routes';


class Main extends React.Component {
    render() {
        return (
            <Router>
                <Navbar />
                { Routes }
                <Footer />
            </Router>
        );
    }
}

export default Main;