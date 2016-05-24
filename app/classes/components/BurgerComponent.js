class BurgerComponent {
    constructor(cost, cal) {
        this.cost = !!parseFloat(cost) ? cost : new Error('Cost must be a number');
        this.cal = typeof cal === 'number' ? cal : new Error('Cal must be a number');
    }
}

export default BurgerComponent;
