import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => (
    <Switch>
        <Route  path='/' component={App} />
        
        
    </Switch>
)



ReactDOM.render(<Router>
                <Root />
                </Router>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();








