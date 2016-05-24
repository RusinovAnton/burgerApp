import { forEach as _forEach } from 'lodash';

function validate(item) {
    if (typeof item === 'number' && item >= 0) {
        return item;
    } else {
        throw new Error(item + ' is not valid value. Must be a positive Number');
    }
}

class BurgerComponent {
    constructor(cost, cal) {
        cost = validate(cost);
        cal = validate(cal);

        this.cost = cost;
        this.cal = cal;
    }
}

export default BurgerComponent;
