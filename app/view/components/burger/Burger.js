'use strict';

import React from 'react';
import BurgerComponentContainer from '../burgerComponents/BurgerComponentContainer';

export default class Burger extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (!this.state.clicked) this.setState({clicked: true});
    }

    render() {

        let clicked = this.state.clicked ? ' clicked' : '';

        return (
            <div className={"burger__body" + clicked} onClick={this.handleClick}>
                <span className="burger__name">{ this.props.name }</span>
                <ul className="burger__components">
                    {this.props.components.map((component, key)=>{
                        return (<BurgerComponentContainer key={key} component={component} />)
                    })}
                </ul>
            </div>
        )
    }
}
