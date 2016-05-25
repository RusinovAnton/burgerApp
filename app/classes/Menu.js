import { Size, Stuff, Top } from './components/Components';
import { extend as _extend } from 'lodash';

class Menu {
    constructor() {
        this.items = {
            size: {},
            stuff: {},
            top: {}
        }
        this.validate = {
            menuItemName: function (name) {
                if (typeof name === 'string') {
                    return true;
                } else {
                    throw new Error('name must be a string');
                }
            },
            menuItem: function (item, parentClass) {
                if (item instanceof parentClass) {
                    return true;
                } else {
                    throw new Error('The item you want to assign is not instance of '+ parentClass +' class');
                }
            }
        }
    }

    import(items) {
        this.items = items;
    }


    addSize(name, item) {
        if (this.validate.menuItemName(name) && this.validate.menuItem(item, Size)) this.items.size[name.toLowerCase()] = item;
    }

    addStuff(name, item) {
        if (this.validate.menuItemName(name) && this.validate.menuItem(item, Stuff)) this.items.size[name.toLowerCase()] = item;
    }

    addTop(name, item) {
        if (this.validate.menuItemName(name) && this.validate.menuItem(item, Top)) this.items.size[name.toLowerCase()] = item;
    }

    get menuList() {
        return this.items;
    }
}


export default Menu;
