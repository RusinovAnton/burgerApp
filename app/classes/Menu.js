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

    addSize(name, item) {
        if (menuItemName(name) && menuItem(item, Size)) this.items.size[name.toLowerCase()] = item;
    }

    addStuff(name, item) {
        if (menuItemName(name) && menuItem(item, Stuff)) this.items.size[name.toLowerCase()] = item;
    }

    addTop(name, item) {
        if (menuItemName(name) && menuItem(item, Top)) this.items.size[name.toLowerCase()] = item;
    }

    get menuList() {
        return this.items;
    }
}


export default Menu;
