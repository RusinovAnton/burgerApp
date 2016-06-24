'use strict';

import React from 'react';
import Service from '../../../services/burgerComponentsService';

import {uniqueId as _uniqueId} from 'lodash';

export default class BurgerComponentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id || _uniqueId('$'),
            type: this.props.type || '',
            name: this.props.name || '',
            color: this.props.color || '#FFFFFF',
            cost: this.props.cost || '',
            callories: this.props.callories || ''
        };

        this.inputChange = this.inputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(e) {
        e.preventDefault();
        Service
            .addComponent(this.state);

        this.setState({
            id: _uniqueId('$'),
            type: '',
            name: '',
            color: '#FFFFFF',
            cost: '',
            callories: ''
        })
    }

    inputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="burger-component__form">
                <h3>BurgerComponentForm</h3>
                <form onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <select name="type" id="type" value={this.state.type} onChange={this.inputChange}>
                            <option value=""></option>
                            <option value='stuff'>stuff</option>
                            <option value='topping'>topping</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" name="name" onChange={this.inputChange} value={this.state.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Color</label>
                        <input id='color' type="color" name="color" onChange={this.inputChange}
                               value={this.state.color}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cost">cost</label>
                        <input id='cost' type="number" name="cost" onChange={this.inputChange} value={this.state.cost}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="callories">callories</label>
                        <input id='callories' type="number" name="callories" onChange={this.inputChange}
                               value={this.state.callories}/>
                    </div>
                    <button type="submit" className="btn btn-success">
                        add
                    </button>
                </form>
            </div>
        );
    }
}
