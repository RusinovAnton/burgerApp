'use strict';

import React from 'react';

export default class BurgerComponent extends React.Component {
    render() {
        return (
            <div className={"burger__component burger__component--"+this.props.type} style={{backgroundColor: this.props.color}}>
                <span className="burger__component__name">{this.props.name}</span>
            </div>
        )
    }
}
