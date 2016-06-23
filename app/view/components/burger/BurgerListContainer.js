'use strict';

import React from 'react';
import BurgerList from './BurgerList';

export default class BurgerListContainer extends React.Component {
    constructor() {
        super();
        this.state = {burgers: []}
    }
    componentDidMount() {
        this.setState({burgers: [
            {
                name: 'ezy',
                components: [
                    'mayo',
                    'tomato',
                    'beef'
                ]
            },
            {
                name: 'peezy',
                components: [
                    'mayo',
                    'tomato',
                    'beef'
                ]
            }
        ]});
    }
    render() {
        return (
            <BurgerList burgers={this.state.burgers} />
        )
    }
}
