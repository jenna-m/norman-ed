import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { env } from './config';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App env={env} />
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
