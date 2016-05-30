import { forEach as _forEach } from 'lodash';
import isString from 'lodash';
import isNumber from 'lodash';
import isBurgerComponent from '../utils/isBurgerComponent';

const isUndefined = require('lodash').isUndefined;

export default class BurgerComponent {
    constructor(type, params) {
        this.init(type, params);
    }

    init(type, params) {

        if (isUndefined(params)) throw new Error('params input required');

        if (isNumber(params.cost)) {
            this.cost = params.cost;
        } else {
            throw new Error('cost is not valid');
        }

        if (isNumber(params.cal)) {
            this.cal = params.cal
        } else {
            throw new Error('cal is not valid');
        }

        if(isString(type) && isBurgerComponent(type)) {
            this.type = type.toUpperCase();
        } else {
            throw new Error('type is not valid');
        }
        if((!isUndefined(params.name)) && typeof params.name === 'string') {
            this.name = params.name;
        } else {
            throw new Error('params.name must be set');
        }

        this.machineName = `${this.type.toUpperCase()}_${this.name.toUpperCase()}`;
    }

}
