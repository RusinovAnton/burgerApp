'use strict';

import React from 'react';
import BurgerComponentsList from './BurgerComponentsList';
import Service from '../../../../services/burgerComponentsService';

export default class BurgerComponentsListContainer extends React.Component {
    constructor() {
        super();
        this.state = {contentLoaded: false, components: []};

        this.createComponent = this.createComponent.bind(this);
    }

    createComponent(e) {

        console.log(e);

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

    componentDidMount() {
        Service.getComponent().then((components)=> {
            this.setState({
                contentLoaded: true,
                components: components
            });
        });
    }

    render() {
            return (
                <div>
                    <h2>Burger Components</h2>
                    <BurgerComponentsList isLoaded={this.state.contentLoaded} components={this.state.components}/>
                    <button type="button"
                            onClick={this.createComponent}
                            className="btn btn-info">
                        add component +
                    </button>
                </div>
            )
    }
}
