const BurgerComponent = require('./BurgerComponent');
const extendClass = require('../../utils/extendClass');

function Size(cost, cal) {
    BurgerComponent.apply(this, [cost, cal]);
}
extendClass(Size, BurgerComponent);
Size.prototype.type = 'SIZE';

module.exports = Size;
