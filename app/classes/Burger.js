import { forEach as _forEach, toArray as _toArray }  from 'lodash';

import * as validate from './validateBurger';

import isDefined from '../utils/isDefined';

export default class Burger {
    /**
     * constructor of Burger object
     * @param { String } name
     * @param { Object } components
     * @returns { Burger }
     */

    constructor(name, components) {
        this.init(name, components);
    }

    init(name, components) {
        if (validate.name(name)) this.itemName = name;
        this.components = {};

        if(isDefined(components) && _toArray(components).length > 0) {
            _forEach(components, function(component, type){
                if (validate.type(type)) {
                    if (isDefined(component) && validate.component(component)) {
                        this.components[type] = component
                    } else {
                        throw new Error('component is not defined');
                    }
                }
            }.bind(this));
        } else {
            throw new Error('components object is not defined or empty');
        }
    }

    set name(name) {
        if (validate.name(name)) this.itemName = name;
    }

    set size(size) {
        if (validate.component(size)) this.components.size = size;
    }

    set stuff(stuff) {
        if (validate.component(stuff)) this.components.stuff = stuff;
    }

    set topp(topp) {
        if (validate.component(topp)) this.components.topp = topp;
    }

    get name() {
        return this.itemName;
    }

    get size() {
        return this.components.size;
    }

    get stuff() {
        return this.components.stuff;
    }

    get topp() {
        return this.components.topp;
    }
};
