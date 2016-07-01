'use strict';

import React from 'react';
import BurgerListWidget from './burger/BurgerListWidget';
import BurgerComponentsListWidget from './burgerComponents/list/BurgerComponentsListWidget';

export default class BurgerHome extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-7">
                    <BurgerListWidget/>
                </div>
                <div className="col-md-5">
                    <BurgerComponentsListWidget/>
                </div>
            </div>
        );
    }
}
