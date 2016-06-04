'use strict';

import { Render } from './BurgerListRender';
import { BurgerContainer as Container } from './BurgerListContainer';

export default class Burger extends Container {
    constructor (props) {
        super(props);
    }

    render() {
        return Render.call(this, this.props, this.state);
    }
}
