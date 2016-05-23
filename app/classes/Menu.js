const Size = require('./components/Size');
const Stuff = require('./components/Stuff');
const Top = require('./components/Topping');

function Menu() {
    this.items = {};
}

function addItem(type) {
    var instance;
    switch(toLowercase(type)) {
        case 'size':
            instance = Size;
            break;
        case 'stuff':
            instance = Stuff;
            break;
        case 'Top':
            instance = Top;
    }
    return function(name, item){
        this.items[toUppercase(type) + '_' + toUppercase(name)] = item;
    }
}

Menu.prototype.addSize = addItem('size');

Menu.prototype.addStuff = addItem('stuff');

Menu.prototype.addTop = addItem('top');

Menu.prototype.getItem = function(key) {
    if (this.items[key]) {
        return this.items[key];
    } else {
        throw Error('There is no such item in the menu, sorry');
    }
};

module.exports = Menu;
