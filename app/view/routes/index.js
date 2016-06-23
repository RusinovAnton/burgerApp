import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import BurgerListContainer from '../components/BurgerApp';
import BurgerComponentsContainer from '../components/burgerComponents/BurgerComponentsListContainer';
import BurgerContainer from '../components/burger/BurgerListContainer';

var routes = (
    <Router history={hashHistory}>
        <Route path="/"/>
        <Route path="/list" component={ BurgerListContainer }/>
        <Route path="/component/:id" component={ BurgerComponentsContainer }/>
        <Route path="/burger/:id" component={ BurgerContainer }/>
    </Router>
);

export default routes;
