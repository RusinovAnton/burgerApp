import React from 'react';
import {Link} from 'react-router';

class NavLink extends  React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Link {...this.props} activeClassName="is-active"/>)
    }
}

export default class Navigation extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <nav className="navigation">
                <ul className="navigation__links-list">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/burgers_list">Burgers</NavLink></li>
                    <li><NavLink to="/components_list">Components</NavLink></li>
                </ul>
            </nav>
        );
    }
}
