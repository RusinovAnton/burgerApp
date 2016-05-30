import { forEach as _forEach, toArray as _toArray }  from 'lodash';

import BurgerComponent from './BurgerComponent';

import isBurgerComponent from '../utils/isBurgerComponent';
import isChildOf from '../utils/isChildOf';
import isDefined from '../utils/isDefined';
import isString from '../utils/isString';

export default class Burger {
    /**
     * constructor of Burger object
     * @param { String } name
     * @param { Object } components
     * @returns { Burger }
     */
    constructor(name, components) {
        this.init(name, components)
    }
    init(name, components) {
        if (isDefined(name) && isString(name)) this.name = name; else throw new Error('Name is invalid');
        this.components = {};

        if(isDefined(components) && _toArray(components).length > 0) {
            _forEach(components, function(value, key){
                if (isString(key) && isBurgerComponent(key)) {
                    if (isDefined(value)) {
                        if (isChildOf(value, BurgerComponent) || (Array.isArray(value) && isChildOf(value[0], BurgerComponent))) {
                            this.components[key] = value
                        } else {
                            throw new Error('value is not valid')
                        }
                    } else {
                        throw new Error('value is not defined');
                    }
                } else {
                    throw new Error('there is no such burgerComponent type');
                }
            }.bind(this));
        } else {
            throw new Error('components object is not defined or empty');
        }
    }
};
