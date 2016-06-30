'use strict';

import React from 'react';

import BurgerList from './burger/BurgerListContainer';

import BurgerComponentsList from './burgerComponents/list/BurgerComponentsListContainer';

export default class BurgerApp extends React.Component {
    render(){
        return (
            <div>
                <h1>
                    BurgerApp
                </h1>
                <div className="row">
                    <div className="col-md-7">
                        <BurgerList/>
                    </div>
                    <div className="col-md-5">
                        <BurgerComponentsList/>
                    </div>
                </div>
            </div>
        );
    }
}
