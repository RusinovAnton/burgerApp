'use strict';

import React from 'react';

import BurgerList from './burger/BurgerListContainer';
import BurgerForm from './burger/BurgerForm';

import BurgerComponentsList from './burgerComponents/BurgerComponentsListContainer';
import BurgerComponentForm from './burgerComponents/BurgerComponentForm';

export default class BurgerApp extends React.Component {
    constructor() {
        super();

        this.state = {
            showBurgerForm: false,
            showBurgerComponentsForm: false
        };

        this.showBurgerForm = this.showBurgerForm.bind(this);
        this.showBurgerComponentsForm = this.showBurgerComponentsForm.bind(this);
    }
    showBurgerForm() {
        this.setState({
            showBurgerForm: !this.state.showBurgerForm
        })
    }
    showBurgerComponentsForm() {
        this.setState({
            showBurgerComponentsForm: !this.state.showBurgerComponentsForm
        });
    }
    
    render(){
        return (
            <div>
                <h1>
                    BurgerApp
                </h1>
                <div className="row">
                    <div className="col-md-6">
                        <BurgerList/>
                        {this.renderBurgerForm()}
                    </div>
                    <div className="col-md-6">
                        <BurgerComponentsList/>
                        {this.renderBurgerComponentForm()}
                    </div>
                </div>
            </div>
        );
    }
    renderBurgerForm() {
        if (this.state.showBurgerForm) {
            return (<BurgerForm/>);
        } else {
            return (<div className="btn btn-danger" onClick={this.showBurgerForm} >add burger +</div>);
        }
    }
    renderBurgerComponentForm(){
        if (this.state.showBurgerComponentsForm) {
            return (<BurgerComponentForm/>)
        } else {
            return (<div className="btn btn-info" onClick={this.showBurgerComponentsForm} >add component +</div>)
        }
    }
}
