'use strict';

import React from 'react';
import BurgerComponentsList from './BurgerComponentsList';
import Service from '../../../services/burgerComponentsService';

export default class BurgerComponentsListContainer extends React.Component {
    constructor() {
        super();
        this.state = {contentLoaded: false, components: []}
    }

    componentDidMount() {
        Service.
            getComponents().
            then((components)=>{
                this.setState({components: components});
            });
    }

    render() {
        return (
            <BurgerComponentsList components={this.state.components}/>
        )
    }
}
