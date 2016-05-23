const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const PostSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: false },
    title: { type: String, required: true },
    message: { type: String, required: true },
    modified: { type: Date, default: Date.now }
});

PostSchema
    .path('message')
    .validate(function (v) {
        return v.length > 0 && v.length <= 150;
    });

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
