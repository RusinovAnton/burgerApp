'use strict';

import React from 'react';
import BurgerComponentsList from './BurgerComponentsList';
import Service from '../../../../services/burgerComponentsService';

export default class BurgerComponentsListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            contentLoaded: false,
            components: []
        };
    }

    componentDidMount() {
        Service
            .getComponents()
            .then((components)=> {
                this.setState({
                    contentLoaded: true,
                    components: components
                });
            });
    }

    componentWillReceiveProps() {
        if (this.props.addedComponents.length) {
            this.state.components.push(this.props.addedComponents[this.props.addedComponents.length-1]);
            this.setState({});
        }

    }

    render() {
        return (
            <BurgerComponentsList isLoaded={this.state.contentLoaded} components={this.state.components}/>
        )
    }
}
