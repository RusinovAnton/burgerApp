'use strict';

import { Component } from 'react';
import Actions from '../../dispatcher/actions/burgerActions';
import Store from '../../storages/burger.storage';

export default class BurgerContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        // Bind callback methods to make `this` the correct context.
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        Store.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange);
    }

    _handleLabelClick(e) {
        Actions.labelClick(this.className);
        console.log(e);
    }

    _onChange() {
        this.setState(Store.getBurgerState());
    }
}

module.exports = Screen;
