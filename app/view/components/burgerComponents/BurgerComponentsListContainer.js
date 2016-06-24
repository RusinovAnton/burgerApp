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
                    name: 'sauce',
                    type: 'topping',
                    color: '#c98973',
                    cost: 15,
                    callories: 2
                },
                {
                    name: 'tomato',
                    type: 'stuff',
                    color: '#f96244',
                    cost: 35,
                    callories: 67
                },
                {
                    name: 'onion',
                    type: 'stuff',
                    color: '#d9d2c5',
                    cost: 25,
                    callories: 45
                },
                {
                    name: 'poultry',
                    type: 'stuff',
                    color: '#69280b',
                    cost: 100,
                    callories: 250
                },
                {
                    name: 'beef',
                    type: 'stuff',
                    color: '#431b1c',
                    cost: 100,
                    callories: 250
                },
                {
                    name: 'pork',
                    type: 'stuff',
                    color: '#611715',
                    cost: 130,
                    callories: 270
                },
                {
                    name: 'salad',
                    type: 'stuff',
                    color: '#b2c33e',
                    cost: 45,
                    callories: 20
                },
                {
                    name: 'cheese',
                    type: 'stuff',
                    color: '#f3d39a',
                    cost: 45,
                    callories: 20
                },
                {
                    name: 'bun',
                    type: 'stuff',
                    color: '#f5af62',
                    cost: 45,
                    callories: 20
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
