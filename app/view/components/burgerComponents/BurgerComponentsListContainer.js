'use strict';

import React from 'react';
import BurgerComponentsList from './BurgerComponentsList';

export default class BurgerComponentsListContainer extends React.Component {
    constructor() {
        super();
        this.state = {components: []}
    }

    componentDidMount() {
        this.setState({
            components: [
                {
                    name: 'mayo',
                    type: 'topping',
                    color: '#f0eeb9',
                    cost: 20,
                    callories: 130
                },
                {
                    name: 'tomato',
                    type: 'stuff',
                    color: '#f96244',
                    cost: 35,
                    callories: 67
                },
                {
                    name: 'beef',
                    type: 'stuff',
                    color: '#431b1c',
                    cost: 100,
                    callories: 250
                }
            ]
        });
    }

    render() {
        return (
            <BurgerComponentsList components={this.state.components}/>
        )
    }
}
