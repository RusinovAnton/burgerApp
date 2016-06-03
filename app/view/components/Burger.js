'use strict';

import Container from './BurgerContainer';
import Render from './BurgerRender';

export default class Burger extends Container {
    constructor (props) {
        super(props);
    }

    render () {
        return Render.call(this, this.props, this.state);
    }
}
