const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const burgerComponentSchema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    color: {type: String, required: true},
    cost: {type: Number, required: true},
    callories: {type: Number, required: true}
});

mongoose.model('burgerComponent', burgerComponentSchema);
