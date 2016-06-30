import React from 'react';
import BurgerComponentContainer from './BurgerComponentContainer';

export default class BurgerComponentsList extends React.Component {
    render() {
        return (
            <div>
                <h2>Burger Components</h2>
                <div className="burger__components-list">
                    {this.props.components.map((component, key)=> {
                        return (
                            <BurgerComponentContainer key={key} isEditable={true} component={component}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}
