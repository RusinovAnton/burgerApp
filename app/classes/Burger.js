import { forEach as _forEach }  from 'lodash';

class Burger {
    constructor(menu, size, stuff, top) {
        this.menu = menu
        this.components = {
            size: size || null,
            stuff: stuff || null,
            top: top || null
        }
    }

    set size(size) {
        this.components.size = size;
    }

    set stuff(stuff) {
        this.components.stuff = stuff;
    }

    set top(top) {
        this.components.top = top;
    }

    get size() {
        return this.components.size;
    }

    get stuff() {
        return this.components.stuff;
    }

    get top() {
        return this.components.top;
    }

    get cost() {
        return this.sumComponents('cost');
    }

    get calories() {
        return this.sumComponents('cal');
    }

    sumComponents(key) {
        let value = 0;

        _forEach(this.components, function (value, key) {
            value += this.menu[el][key];
        }.bind(this));

        return value;
    }
}

export default Burger;
