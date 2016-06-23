const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BurgerSchema = new Schema({
    name: {type: String, required: false},
    components: {type: Array, required: false}
});

mongoose.model('burger', BurgerSchema);
