'use strict';

import { Component } from 'react';

import Store from '../../storages/burger.storage';
import Actions from '../../actions/burgerActions';
import Dispatcher from '../../dispatcher/burgerDispatcher';

class BurgerContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        // Bind callback methods to make `this` the correct context.
        this._onChange = this._onChange.bind(this);
        this._handleAddBurger = this._handleAddBurger.bind(this);
    }

    componentDidMount() {
        Dispatcher.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        Dispatcher.removeChangeListener(this._onChange);
    }

    _handleAddBurger(e) {
        Actions.addBurger('hi', 'components');
    }

    _onChange() {
        this.setState(Store.getState());
    }
}

export { BurgerContainer };
