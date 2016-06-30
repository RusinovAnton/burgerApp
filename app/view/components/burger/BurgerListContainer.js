'use strict';

import React from 'react';
import BurgerList from './BurgerList';

export default class BurgerListContainer extends React.Component {
    constructor() {
        super();
        this.state = {burgers: []}
    }

    componentDidMount() {
        this.setState({
            burgers: [
                {
                    name: 'ezy',
                    components: [
                        {
                            _id: 'id',
                            name: 'mayo',
                            type: 'topping',
                            color: '#f0eeb9',
                            cost: 20,
                            callories: 130
                        },
                        {
                            _id: 'id',
                            name: 'sauce',
                            type: 'topping',
                            color: '#c98973',
                            cost: 15,
                            callories: 2
                        },
                        {
                            _id: 'id',
                            name: 'tomato',
                            type: 'stuff',
                            color: '#f96244',
                            cost: 35,
                            callories: 67
                        },
                        {
                            _id: 'id',
                            name: 'onion',
                            type: 'stuff',
                            color: '#d9d2c5',
                            cost: 25,
                            callories: 45
                        },
                        {
                            _id: 'id',
                            name: 'beef',
                            type: 'stuff',
                            color: '#431b1c',
                            cost: 100,
                            callories: 250
                        },
                        {
                            _id: 'id',
                            name: 'salad',
                            type: 'stuff',
                            color: '#b2c33e',
                            cost: 45,
                            callories: 20
                        }
                    ]
                },
                {
                    name: 'peezy',
                    components: [
                        {
                            _id: 'id',
                            name: 'mayo',
                            type: 'topping',
                            color: '#f0eeb9',
                            cost: 20,
                            callories: 130
                        },
                        {
                            _id: 'id',
                            name: 'sauce',
                            type: 'topping',
                            color: '#c98973',
                            cost: 15,
                            callories: 2
                        },
                        {
                            _id: 'id',
                            name: 'tomato',
                            type: 'stuff',
                            color: '#f96244',
                            cost: 35,
                            callories: 67
                        },
                        {
                            _id: 'id',
                            name: 'onion',
                            type: 'stuff',
                            color: '#d9d2c5',
                            cost: 25,
                            callories: 45
                        },
                        {
                            _id: 'id',
                            name: 'beef',
                            type: 'stuff',
                            color: '#431b1c',
                            cost: 100,
                            callories: 250
                        },
                        {
                            _id: 'id',
                            name: 'salad',
                            type: 'stuff',
                            color: '#b2c33e',
                            cost: 45,
                            callories: 20
                        }
                    ]
                }
            ]
        });
    }

    render() {
        return (
            <div>
                <BurgerList burgers={this.state.burgers}/>
                <div className="btn btn-danger" onClick={this.showBurgerForm} >add burger +</div>
            </div>
        )
    }
}
