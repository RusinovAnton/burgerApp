import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import BurgerList from '../components/BurgerList';
//import Menu from '../components/Menu';

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={ BurgerList }/>
    </Router>
);

export default routes;
