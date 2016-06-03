'use strict';

const express           = require('express'),
    requireTree         = require('require-tree'),
    init                = requireTree('./init/'),
    logger              = require('morgan'),
    path                = require('path'),
    serveStatic         = require('serve-static'),
    cookieParser        = require('cookie-parser'),
    bodyParser          = require('body-parser'),
    passport            = require('passport'),
    mongoose            = require('mongoose'),
    session             = require('express-session'),
    methodOverride      = require('method-override'),
    LocalStrategy       = require('passport-local').Strategy,
    User                = require('mongoose').model('user'),

    app = express();

// view engine setup
init.viewsHandlers(app);

init.database();

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function(email, password, done){
    User.findOne({ email : email}, function(err,user){
        console.log(user)
        return err ?
            done(err) : user ?
                password === user.password ?
                    done(null, user) : done(null, false, { message: 'Incorrect password.' })
                : done(null, false, { message: 'Incorrect username.' });
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err,user){
        err
            ? done(err)
            : done(null,user);
    });
});

// TODO: add bootable or smth

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(serveStatic(path.join(__dirname, '../public')));
app.use(session({ saveUninitialized: false, resave: false, secret: 'SECRET' }));
app.use(methodOverride());
app.use(passport.initialize());
app.use(passport.session());
require('./routes/index')(app);

// error handling setup
init.errorHandlers(app);

module.exports = app;
