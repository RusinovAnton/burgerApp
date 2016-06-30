'use strict';

import React from 'react';

import Service from '../../../services/burgerComponentsService';
import BurgerComponent from './BurgerComponent';
import BurgerComponentEdit from './BurgerComponentEdit';
import {assign} from 'lodash';

export default class BurgerComponentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.isEditable = this.props.isEditable || false;
        this.state = {
            isEdit: false
        };

        this.edit = this.edit.bind(this);
        this.updateComponent = this.updateComponent.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);
    }

    deleteComponent() {
        Service.deleteComponent(this.props.component._id)
            .then((res)=> {
                this.setState({isEdit: !this.state.isEdit})
            });
    }

    edit() {
        if (this.isEditable) this.setState({isEdit: !this.state.isEdit})
    }

    updateComponent(component) {
        Service.updateComponent(this.props.component._id, component)
            .then((res)=> {
                console.log(res);
                this.setState({isEdit: !this.state.isEdit})
            });
    }

    render() {
        if (this.state.isEdit) {
            return this.renderComponentEdit();
        }
        else {
            return this.renderComponent();
        }
    }

    renderComponent() {
        return (
            <BurgerComponent type={this.props.component.type}
                             name={this.props.component.name}
                             color={this.props.component.color}
                             cost={this.props.component.cost}
                             callories={this.props.component.callories}
                             onClick={this.edit}/>
        );
    }

    renderComponentEdit() {
        return (
            <BurgerComponentEdit type={this.props.component.type}
                                 name={this.props.component.name}
                                 color={this.props.component.color}
                                 cost={this.props.component.cost}
                                 callories={this.props.component.callories}
                                 onCancel={this.edit}
                                 onRemove={this.deleteComponent}
                                 onUpdate={this.updateComponent}/>
        );
    }
}
