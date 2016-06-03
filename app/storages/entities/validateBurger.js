import { BurgerComponent } from './burger/BurgerComponent';

import isChildOf from './utils/isChildOf';

import isBurgerComponent from './burger/isBurgerComponent';
import { isUndefined, isString } from 'lodash';

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
