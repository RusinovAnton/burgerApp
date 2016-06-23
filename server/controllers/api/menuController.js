'use strict';

const $ = {};
const mongoose = require('mongoose');
const burgerComponentSchema = mongoose.model('burgerComponent');

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

};

module.exports = $;
