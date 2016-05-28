import { Size, Stuff, Top } from './components/Components';
import { extend as _extend } from 'lodash';
import { name as menuItemName, component as menuItem } from './utils/validate';

class Menu {
    constructor() {
        this.items = {
            size: {},
            stuff: {},
            top: {}
        }
    }
    set item(item) {
        
    }
    addSize(name, item) {
        if (menuItemName(name) && menuItem(item, Size)) this.items.size[name.toLowerCase()] = item;
    }

    addStuff(name, item) {
        if (menuItemName(name) && menuItem(item, Stuff)) this.items.stuff[name.toLowerCase()] = item;
    }

    addTop(name, item) {
        if (menuItemName(name) && menuItem(item, Top)) this.items.top[name.toLowerCase()] = item;
    }

    removeItem(type, name) {
        name = name.toLowerCase();
        if (typeof this.items[type][name] !== 'undefined') delete this.items[type][name];
        else { throw new Error('There is not such item in the menu object');}
    }

    get menuList() {
        return this.items;
    }
}


export default Menu;
