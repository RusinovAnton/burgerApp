
import React from 'react';

export default class Burger extends React.Component {
    render() {
        let className = 'burger--item';
        if (this.props.size) className + ' ' + this.props.size;
        if (this.props.stuff !== void 0) {
            let components = this.props.stuff.map((component)=>{
                return (
                    <div className={'burger--component' + component.name}>
                    </div>
                )
            });
        } else {
            return (<div>there is no stuff on burger yet</div>);
        }

        return (
          <div className={className}>
            <div className='burger--components'>
                {components}
            </div>
          </div>
        );
    }
}
