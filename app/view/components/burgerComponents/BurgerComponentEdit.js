import React from 'react';


export default class BurgerComponentEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type || '',
            name: this.props.name || '',
            color: this.props.color || '#FFFFFF',
            cost: this.props.cost || '',
            callories: this.props.callories || ''
        };

        this.inputChange = this.inputChange.bind(this);
        this.submitComponent = this.submitComponent.bind(this);
    }

    submitComponent(e){
        e.preventDefault();
        this.props.onUpdate(this.state);
    }

    inputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className={"burger__component burger__component--"+this.state.type}
                 style={{backgroundColor: this.state.color}}>
                <form onSubmit={this.submitComponent}>
                    <select name="type" id="type" value={this.state.type} onChange={this.inputChange} title="type">
                        <option value=""></option>
                        <option value='stuff'>stuff</option>
                        <option value='topping'>topping</option>
                    </select>
                    <input type="color" name="color" value={this.state.color} onChange={this.inputChange}/>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.inputChange} title="name"/>
                    <input type="number" name="cost" id="cost" value={this.state.cost} step="0.01" onChange={this.inputChange} title="cost"/>
                    <input type="number" name="callories" id="callories" step="0.01" value={this.state.callories} onChange={this.inputChange} title="callories"/>
                    <button type="submit" className="btn btn-success btn-sm" title="Save">v</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={this.props.onRemove} title="Remove">x</button>
                    <button type="button" className="btn btn-default btn-sm" onClick={this.props.onCancel} title="Cancel">Cancel</button>
                </form>
            </div>
        );
    }
}
