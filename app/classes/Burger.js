import { forEach as _forEach }  from 'lodash';
import { component as validateComponent } from './utils/validate';

class Burger {

    constructor(size, stuff, top) {
        this.components = {
            size
        }
        this.init(size, stuff, top)
    }

    set size(size) {
        if (validateComponent(size, Size)) this.components.size = size;
    }

    set stuff(stuff) {
        if (Array.isArray(stuff)) {
            this.components.stuff.concat(stuff.map(function (stuffItem) {
                return validateComponent(stuffItem, Stuff);
            }));
        } else if (validateComponent(stuff, Stuff)) {
            this.components.stuff ? this.components.stuff.push(stuff) : this.components.stuff = [stuff];
        }
    }

    set top(top) {
        if (Array.isArray(top)) {
            this.components.top.concat(top.map(function (topItem) {
                return validateComponent(topItem, Top);
            }));
        } else if (validateComponent(top, Top)) {
            this.components.top ? this.components.top.push(top) : this.components.top = [top];
        }
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

    init(size, stuff, top) {
        this.size = size;
        this.stuff = stuff;
        this.top = top;
    }
}

export default Burger;
