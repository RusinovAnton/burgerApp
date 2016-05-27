var React = require('react');
var Link = require('react-router').Link;

export default React.createClass({
    render: function(){
        return (
            <div>
                <Link to='/burger'>Burgerino</Link>
            </div>
        );
    }
});
