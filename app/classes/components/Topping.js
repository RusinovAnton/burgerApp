const BurgerComponent = require('./BurgerComponent');
const extendClass = require('../../utils/extendClass');

function Topping(cost, cal) {
    BurgerComponent.apply(this, [cost, cal]);
}
extendClass(Topping, BurgerComponent);
Topping.prototype.type = 'TOPPING';

module.exports = Topping;
