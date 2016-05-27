'use strict';

const requireTree = require('require-tree'),
    controllers = requireTree('../controllers'),
    middlewares = requireTree('../middlewares'),
    router = require('express').Router();

router
    // base routes
    .get    ('/',              controllers.render('index', {page: {name: 'Burgerino', title: 'Burgerino'}}))
    // api routes
    .get    ('/api/burgerList/',     controllers.api.burger.getBurgerList)
    .get    ('/api/burger/:id?',     controllers.api.burger.getBurger)
    .post   ('/api/burger',          controllers.api.burger.postBurger)
    .get    ('/api/getMenuList',     controllers.api.burger.getMenuList)
    .post   ('/api/setMenuList',     controllers.api.burger.setMenuList);

module.exports = function(app){
    app.use('/', router);
};
