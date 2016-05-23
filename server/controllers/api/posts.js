'use strict';

const $ = {},
    mongoose = require('mongoose'),
    postSchema = mongoose.model('post');

/**
 * @Route /api/posts
 * @method GET
 * @param req
 * @param res
 * @return {Object}
 */
$.get =  function (req, res) {
    return postSchema.find(function (err, posts) {
        if (!err) {
            return res.send(posts);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    });
};

/**
 * @Route /api/posts
 * @method POST
 * @param req
 * @param res
 */
$.post = function (req, res) {
    const post = new postSchema({
        username: req.body.username,
        email: req.body.email,
        title: req.body.title,
        message: req.body.message
    });

    post.save(function (err) {
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

module.exports = $;
