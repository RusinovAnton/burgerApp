'use strict';

const $ = {};
const mongoose = require('mongoose');
const burgerComponentSchema = mongoose.model('burgerComponent');
const _assign = require('lodash').assign;

/**
 * @route /api/component/:id?
 * @method GET
 * @param req
 * @param res
 */
$.getComponents = function (req, res) {
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
 * @route /api/component
 * @method POST
 * @param req
 * @param res
 */
$.postComponent = function (req, res) {
    let component = new burgerComponentSchema(JSON.parse(req.body.component));
    component.save(function (err) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }
        res.sendStatus(200);
    });
};

/**
 * @route /api/component/:id
 * @method PUT
 * @param req
 * @param res
 */
$.updateComponent = function (req, res) {
    burgerComponentSchema.findById(req.params.id, function (err, component) {
        if (!component) {
            return res.sendStatus(404);
        } else {

            let componentUpdated = JSON.parse(req.body.component);

            // Update component
            component.type = componentUpdated.type;
            component.name = componentUpdated.name;
            component.color = componentUpdated.color;
            component.cost = componentUpdated.cost;
            component.callories = componentUpdated.callories;

            component
                .save()
                .then((component)=> {
                    res.send(component);
                })
                .catch((err)=> {
                    console.log(err);
                    res.status(500).send(err);
                });
        }
    })
};

/**
 * @route /api/component/:id
 * @method DELETE
 * @param req
 * @param res
 */
$.deleteComponent = function (req, res) {
    burgerComponentSchema.findByIdAndRemove(req.params.id, function () {
        console.log(arguments);
    })
};

module.exports = $;
