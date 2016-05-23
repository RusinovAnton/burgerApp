var React = require('react');
var BurgerItem = require('./BurgerItem');

module.exports = React.createClass({
    render: function(){
        var burgerList = this.props.burgerList ?
            this.props.burgerList.map(function(burger, key){
                return (<BurgerItem key={key} burger={burger}/>);
            }) : '';
        var elClass = this.props.isLoading ? 'status-loading' : 'status-done';
        return (
            <div className={elClass}>
                <span className='isLoading'>Loading...</span>
                <div className="burgerList">
                    <ul>
                        { burgerList }
                    </ul>
                </div>
            </div>
        );
    }
});
