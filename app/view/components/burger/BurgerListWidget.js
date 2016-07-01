import React from 'react';
import BurgerListContainer from './BurgerListContainer';

export default class BurgerListWidget extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <BurgerListContainer />
                <div className="btn btn-danger" onClick={this.showBurgerForm}>add burger +</div>
            </div>
        )
    }
}
