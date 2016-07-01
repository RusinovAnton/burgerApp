import React from 'react';
import BurgerComponentContainer from '../BurgerComponentContainer';
import BurgerComponentPreContainer from '../BurgerComponentPreContainer';
import IsLoading from '../../common/IsLoading';

export default class BurgerComponentsList extends React.Component {
    render() {
        if (this.props.isLoaded) {
            return (
                <div className="burger__components-list">
                    {this.props.components.map((component, key)=> {
                        if (component.posted) {
                            return (
                                <BurgerComponentContainer key={key} isEditable={true} component={component}/>
                            )
                        } else {
                            return (
                                <BurgerComponentPreContainer key={key} isEditable={true} component={component}/>
                            )
                        }

                    })}
                </div>
            );
        } else {
            return (
                <div className="burger__components-list">
                    <IsLoading/>
                </div>
            );
        }
    }
}
