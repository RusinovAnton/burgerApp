'use strict';

module.exports = function (req, res, next){
    console.log(req.isAuthenticated());
    req.isAuthenticated()
        ? next()
        : res.redirect('/');
};
