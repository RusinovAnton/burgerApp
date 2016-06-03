import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Burger from '../components/Burger';
//import Menu from '../components/Menu';

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={ Burger }/>
    </Router>
);

export default routes;
