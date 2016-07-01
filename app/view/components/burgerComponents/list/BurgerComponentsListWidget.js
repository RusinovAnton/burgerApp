

'use strict';

import React from 'react';
import BurgerComponentsListContainer from './BurgerComponentsListContainer';
import Service from '../../../../services/burgerComponentsService';

export default class BurgerComponentsListWidget extends React.Component {
    constructor() {
        super();
        this.createComponent = this.createComponent.bind(this);
    }

    createComponent() {
        this.state.components.push(
            {
                callories: '',
                color: "#FFFFFF",
                cost: '',
                name: '',
                type: ''
            }
        );
        this.setState({});
    }

    render() {
        return (
            <div>
                <h2>Burger Components</h2>
                <BurgerComponentsListContainer/>
                <button type="button"
                        onClick={this.createComponent}
                        className="btn btn-info">
                    add component +
                </button>
            </div>
        )
    }
}
