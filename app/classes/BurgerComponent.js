import { forEach as _forEach } from 'lodash';
import isBurgerComponent from '../utils/isBurgerComponent';
import isNumber from '../utils/isNumber';
import isString from '../utils/isString';
import isDefined from '../utils/isDefined';

export default class BurgerComponent {
    constructor(type, params) {
        this.init(type, params);
    }

    init(type, params) {
        if (!isDefined(params)) throw new Error('params input required');

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

        if(isDefined(params.name) && typeof params.name === 'string') {
            this.name = params.name;
        } else {
            throw new Error('params.name must be set');
        }

        this.machineName = `${this.type.toUpperCase()}_${this.name.toUpperCase()}`;
    }

}
