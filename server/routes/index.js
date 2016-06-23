'use strict';

const requireTree = require('require-tree');
const controllers = requireTree('../controllers');
const middlewares = requireTree('../middlewares');
const router = require('express').Router();

router
    // base routes
    .get    ('/',                    controllers.render('index', {page: {name: 'Burgerino', title: 'Burgerino'}})  )
    // api routes
    //   Burger
    .get    ('/api/burgerList/',     controllers.api.burgerController.getBurgerList)
    .get    ('/api/burger/:id?',     controllers.api.burgerController.getBurger)
    .post   ('/api/burger',          controllers.api.burgerController.postBurger)
    //    BurgerComponents
    .get    ('/api/component/:id?',  controllers.api.menuController.getComponent)
    .post   ('/api/component',       controllers.api.menuController.postComponent);

module.exports = function(app){
    app.use('/', router);
};
