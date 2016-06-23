const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const burgerComponentSchema = new Schema({
    type: {type: String},
    name: {type: String},
    color: {type: String},
    cost: {type: Number, required: false},
    callories: {type: Number, required: false}
});

mongoose.model('burgerComponent', burgerComponentSchema);
