'use strict';

import React from 'react';

export default class BurgerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"burger__component burger__component--"+this.props.type}
                 style={{backgroundColor: this.props.color}}
                 onClick={this.props.onClick}>
                <span className="burger__component__name">{this.props.name}</span>
            </div>
        );
    }
}
