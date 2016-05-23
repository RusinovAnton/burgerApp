const BurgerComponent = require('./BurgerComponent');
const extendClass = require('../../utils/extendClass');

function Stuff(cost, cal) {
    BurgerComponent.apply(this, [cost, cal]);
}
extendClass(Stuff, BurgerComponent);
Stuff.prototype.type = 'STUFF';

module.exports = Stuff;
