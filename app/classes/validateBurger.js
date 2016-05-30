import BurgerComponent from './BurgerComponent';

import isChildOf from '../utils/isChildOf';

import isString from 'lodash';
import isBurgerComponent from '../utils/isBurgerComponent';

const isUndefined = require('lodash').isUndefined;

function name(name) {
    if (isUndefined(name) || !isString(name)) throw new Error('Name is invalid');
    return true;
}

function type(type) {
    if (!(isString(type) && isBurgerComponent(type)))  throw new Error('there is no such burgerComponent type');
    return true;
}

function component(component) {
    if (!(isChildOf(component, BurgerComponent) || (Array.isArray(component) && isChildOf(component[0], BurgerComponent))))  throw new Error('component is not valid');
    return true;
}

export { name, type, component };
