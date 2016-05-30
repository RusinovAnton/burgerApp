import BurgerComponent from './BurgerComponent';

import isChildOf from '../utils/isChildOf';
import isDefined from '../utils/isDefined';
import isString from '../utils/isString';
import isBurgerComponent from '../utils/isBurgerComponent';

function name(name) {
    if (!isDefined(name) || !isString(name)) throw new Error('Name is invalid');
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
