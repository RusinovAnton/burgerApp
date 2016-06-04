'use strict';
import { find as _find, isUndefined } from 'lodash';
import Burger from './entities/burger/Burger';
import uniqid from './uniqid';

class burgerStore {
    constructor(){
        this._burgers = {}
    }
    addBurger(name, components) {
        this._burgers[uniqid()] = new Burger(name, components);
    }
    updateBurger(id, burger) {
        this._burgers[id] = burger;
    }
    removeBurger(id) {
        this._burgers[id].deleted = true;
    }
    getState(id) {
        if (!isUndefined(id) && !isUndefined(_burgers[id])) return this._burgers[id];
        return {
            burgers: this._burgers
        };
    }
}


export default new burgerStore();
