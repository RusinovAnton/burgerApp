import { forEach as _forEach } from 'lodash';
import { componentType as isComponent, number, string } from '../utils/validate';



class BurgerComponent {
    constructor(name, params) {
        cal = validate(params.cal);
        if (number(params.cost) && number(params.cost)) {
            this.cost = params.cost;
            this.cal = params.cal;
        }
        if(isComponent(params.type))
    }
}

export default BurgerComponent;
