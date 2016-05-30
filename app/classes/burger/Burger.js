import { forEach as _forEach, size as _size }  from 'lodash';

import * as validate from './../validateBurger';

import summarize from '../../utils/summarize';
import { isUndefined } from 'lodash';

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
        if (!isUndefined(name)) this.name = name;
        if (!isUndefined(components)) {
            this.components = {};
            if (!isUndefined(components.size)) this.size = components.size;
            if (!isUndefined(components.stuff)) this.stuff = components.stuff;
            if (!isUndefined(components.topp)) this.topp = components.topp;
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

    get cost() {
        return summarize('cost', this.components);
    }

    get callories(){
        return summarize('cal', this.components);
    }
};
