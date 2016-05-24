import { Size, Stuff, Top } from './components/Components';
import { extend as _extend } from 'lodash';

class Menu {
    constructor() {
        this.items = {
            size:   {},
            stuff:  {},
            top:    {}
        }
    }

    addSize(name, item) {
        if (typeof name === 'string') {
            if (item instanceof Size) {
                this.items.size[name.toLowerCase()] = item;
            } else {
                throw new Error('The item you want to assign is not instance of Size class');
            }
        } else {
            throw new Error('name must be a string');
        }
    }

    addStuff(name, item) {
        if (typeof name === 'string') {
            if (item instanceof Stuff) {
                this.items.stuff[name.toLowerCase()] = item;
            } else {
                throw new Error('The item you want to assign is not instance of Stuff class');
            }
        } else {
            throw new Error('name must be a string');
        }
    }

    addTop(name, item) {
        if (typeof name === 'string') {
            if (item instanceof Top) {
                this.items.top[name.toLowerCase()] = item;
            } else {
                throw new Error('The item you want to assign is not instance of Top class');
            }
        } else {
            throw new Error('name must be a string');
        }
    }

    get menuList() {
        return this.items;
    }
}


export default Menu;
