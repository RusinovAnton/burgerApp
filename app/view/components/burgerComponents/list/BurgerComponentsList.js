import React from 'react';
import BurgerComponentContainer from './BurgerComponentContainer';

export default class BurgerComponentsList extends React.Component {
    render() {
        if (this.props.isLoaded) {
            return (
                <div className="burger__components-list">
                    {this.props.components.map((component, key)=> {
                        return (
                            <BurgerComponentContainer key={key} isEditable={true} component={component}/>
                        )
                    })}
                </div>
            );
        } else {
            return (
                <div className="burger__components-list">
                    <span class="is-loading">Loading...</span>
                </div>
            );
        }
    }
}
