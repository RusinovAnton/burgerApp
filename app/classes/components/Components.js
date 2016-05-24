import BurgerComponent from './BurgerComponent';

class Size extends BurgerComponent {
    constructor(cost, cal) {
        super(cost, cal)
        this.type = 'SIZE'
    }
}

class Stuff extends BurgerComponent {
    constructor(cost, cal, type) {
        super(cost, cal)
        this.type = type || 'STUFF'
    }
}

class Top extends BurgerComponent {
    constructor(cost, cal) {
        super(cost, cal)
        this.type = 'TOP'
    }
}

export { Size, Stuff, Top };
