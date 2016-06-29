'use strict';

const express           = require('express'),
    requireTree         = require('require-tree'),
    init                = requireTree('./init/'),
    logger              = require('morgan'),
    path                = require('path'),
    serveStatic         = require('serve-static'),
    cookieParser        = require('cookie-parser'),
    bodyParser          = require('body-parser'),
    session             = require('express-session'),
    methodOverride      = require('method-override'),

    app = express();

// view engine setup
init.viewsHandlers(app);

init.database();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(serveStatic(path.join(__dirname, '../public')));
app.use(session({ saveUninitialized: false, resave: false, secret: 'SECRET' }));
app.use(methodOverride());
require('./routes/index')(app);

// error handling setup
init.errorHandlers(app);

module.exports = app;
