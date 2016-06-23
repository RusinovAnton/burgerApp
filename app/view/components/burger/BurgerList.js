'use strict';

import React from 'react';
import Burger from './Burger';

import {uniqueId as _uniqueId} from 'lodash';

export default class BurgerList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Burgers</h2>
                {this.props.burgers.map(({name, components})=>{
                    return (<Burger key={_uniqueId('_')} name={name} components={components}/>)
                })}
            </div>
        );
    }
}
