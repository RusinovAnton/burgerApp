'use strict';

import React from 'react';
import BurgerComponentsListContainer from './BurgerComponentsListContainer';

export default class BurgerComponentsListWidget extends React.Component {
    constructor() {
        super();
        this.state = {
            addedComponents: []
        }
        this.createComponent = this.createComponent.bind(this);
    }

    createComponent() {
        this.state.addedComponents.push({
            posted: false,
            callories: '',
            color: "#FFFFFF",
            cost: '',
            name: '',
            type: ''
        });
        this.setState({});
    }

    render() {
        return (
            <div>
                <h2>Burger Components</h2>
                <BurgerComponentsListContainer addedComponents={this.state.addedComponents}/>
                <button type="button"
                        onClick={this.createComponent}
                        className="btn btn-info">
                    add component +
                </button>
            </div>
        )
    }
}
