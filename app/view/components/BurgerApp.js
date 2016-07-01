'use strict';

import React from 'react';
import Navigation from './common/Navigation';

export default class BurgerApp extends React.Component {
    render(){
        return (
            <div>
                <header>
                    <Navigation/>
                    <h1>BurgerApp</h1>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
