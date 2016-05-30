import * as burgerComponents from '../classes/burger/BurgerComponent';
import { forEach as _forEach } from 'lodash';

let component_types = [];

_forEach(burgerComponents, function (value, key) {
    component_types.push({[key.toUpperCase()]: value});
});

export default component_types;
