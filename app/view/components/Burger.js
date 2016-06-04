import { Component } from 'react';

export default class Burger extends Component {
    render() {
        let className = 'burger--item';
        if (this.props.size) className + ' ' + this.props.size;
        if (typeof this.props.stuff !== void 0) {
            let components = this.props.stuff.map((component)=>{
                return (
                    <div className={'burger--component' + component.name}>
                    </div>
                )
            });
        } else {
            throw new Error('there is no stuff on burger');
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
