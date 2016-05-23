const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const BurgerSchema = new Schema({
    cost: { type: Number, required: false },
    cal: { type: Number, required: false },
    components: { type: Object, required: false }
});

const Burger = mongoose.model('burger', BurgerSchema);

module.exports = Burger;
