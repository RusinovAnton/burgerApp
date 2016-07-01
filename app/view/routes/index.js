import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import BurgerApp from '../components/BurgerApp';
import BurgerHome from '../components/BurgerHome';
import BurgerComponentsListWidget from '../components/burgerComponents/list/BurgerComponentsListWidget';
import BurgerListWidget from '../components/burger/BurgerListWidget';

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={ BurgerApp }>
            <IndexRoute component={ BurgerHome } />
            <Route path="/components_list" component={ BurgerComponentsListWidget }/>
            <Route path="/burgers_list" component={ BurgerListWidget }/>
        </Route>
    </Router>
);

export default routes;
