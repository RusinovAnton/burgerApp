import React from 'react';
import BurgerComponent from './BurgerComponent';

import {uniqueId as _uniqueId} from 'lodash';

export default class BurgerComponentsList extends React.Component {
    render() {
        return (
            <div>
                <h2>Burger Components</h2>
                <div className="burger__components-list">
                    {this.props.components.map(({name, type, color})=> {
                        return (
                            <BurgerComponent key={_uniqueId('_')} name={name} type={type} color={color} />
                        )
                    })}
                </div>
            </div>
        );
    }
}
