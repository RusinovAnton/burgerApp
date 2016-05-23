const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    //login: { type: String, required: false },
    //username: { type: String, required: false },
    //userpic: { type: String, required: false },
    //status: { type: String, required: false }
});

module.exports = mongoose.model('user', UserSchema);
