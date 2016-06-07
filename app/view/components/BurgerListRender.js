'use strict';
import {forEach} from 'lodash';
import React from 'react';

import Burger from './Burger';

function Render(props, state) {
    let burgers = [];
    console.log(state);
    forEach(state.burgers, (val, key)=>{
        console.log(val, key);
        let size = val.size;
        let stuff = val.stuff;
        let topp = val.topp;
        console.log(val.size, val.stuff, val.topp);
       burgers.push((
            <Burger key={key} size={val.size} stuff={val.stuff} topp={val.topp}/>
       ));
    });
    console.log(burgers);
    return (
        <div className="burger--wrapper">
            <div className="actions">
                <button type='button' className='btn btn-success' onClick={this._handleAddBurger}>
                    +
                </button>
            </div>
            <div className='burger burger--list'>
                {burgers}
            </div>
        </div>
    );
}

export { Render }
