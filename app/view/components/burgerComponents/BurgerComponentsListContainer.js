'use strict';

import React from 'react';
import BurgerComponentsList from './BurgerComponentsList';
import Service from '../../../services/burgerComponentsService';

export default class BurgerComponentsListContainer extends React.Component {
    constructor() {
        super();
        this.state = {contentLoaded: false, components: []}

        this.createComponent = this.createComponent.bind(this);
    }

    createComponent() {

    }

    componentDidMount() {
        Service.
            getComponent().
            then((components)=>{
                this.setState({components: components});
            });
    }

    render() {
        return (
            <div>
                <BurgerComponentsList components={this.state.components}/>
                <button type="button" onClick={this.createComponent} className="btn btn-info" onClick={this.showBurgerComponentsForm} >add component +</button>
            </div>
        )
    }
}
