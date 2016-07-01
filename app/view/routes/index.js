import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import BurgerApp from '../components/BurgerApp';
import BurgerComponentsListWidget from '../components/burgerComponents/list/BurgerComponentsListWidget';
import BurgerListContainer from '../components/burger/BurgerListContainer';

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={ BurgerApp }/>
        <Route path="/components_list" component={ BurgerComponentsListWidget }/>
        <Route path="/burgers_list" component={ BurgerListContainer }/>
    </Router>
);

export default routes;
