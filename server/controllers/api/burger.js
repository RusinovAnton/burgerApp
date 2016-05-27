'use strict';

const $ = {};
const fs = require('fs');
const mongoose = require('mongoose');
const burgerSchema = mongoose.model('burger');
const _forEach = require('lodash').forEach;

function readMenuList() {
    return new Promise(function(resolve, reject){
        try {
            var menuList = JSON.stringify(fs.readFileSync('./server/fixtures/menulist.json', 'utf8', function(err,data){
                return data;
            }));
            resolve(menuList);
        } catch (e) {
            reject(e);
        }
    });
}

/**
 * @Route /api/burgerList
 * @method GET
 * @param req
 * @param res
 * @return { Array } - burgers list
 */
$.getBurgerList = function (req, res) {
    return burgerSchema.find(function (err, burger) {
        if (!err) {
            return res.send(burger);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    });
};

/**
 * @Route /api/burger
 * @method GET
 * @param res
 * @param req
 * @return { Object } Burger object
 */
$.getBurger = function(res,req) {

};

/**
 * @Route /api/burger
 * @method POST
 * @param req
 * @param res
 * @return status code
 */

$.postBurger = function (req, res) {
    console.log(req.body);
    var reqBody = req.body;

    var burger = {
        cost: reqBody.cost,
        cal: reqBody.cal,
        components: {}
    };

    if (reqBody.components) {
        _forEach(reqBody.components, function(componentValue, componentKey){
            burger.components[componentKey] = componentValue;
1        })
    }

    var burgerItem = new burgerSchema(burger);

    burgerItem.save(function (err) {
        if (!err) {
            res.status(200)
        } else {
            console.log(err);
            if (err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({error: 'Validation error'});
            } else {
                res.statusCode = 500;
                res.send({error: 'Server error'});
            }
            log.error('Internal error(%d): %s', res.statusCode, err.message);
        }
    });
};

$.getMenuList = (req, res) => {
    readMenuList()
        .then((menuList)=>{
            res.send(menuList);
        })
        .catch((e)=>{console.log(e)});
};

$.setMenuList = (req, res) => {
    console.log(req);
    res.send(200);
};

module.exports = $;
