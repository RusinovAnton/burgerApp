'use strict';

const $ = {};
const mongoose = require('mongoose');
const burgerComponentSchema = mongoose.model('burgerComponent');

$.getComponentsList = function(req, res) {
    return burgerComponentSchema.find(function (err, burgerComponents) {
        if (!err) {
            return res.send(burgerComponents);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    });
};

/**
 * @route /api/component/:id?
 * @method GET
 * @param req
 * @param res
 */
$.getComponent = function (req, res) {

};

/**
 * @route /api/component
 * @method POST
 * @param req
 * @param res
 */
$.postComponent = function (req, res) {
    let component = new burgerComponentSchema(JSON.parse(req.body.component));
    component.save(function (err, component) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }
        res.sendStatus(200);
    });
};

module.exports = $;
