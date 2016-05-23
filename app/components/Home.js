var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function(){
        return (
            <div>
                <Link to='/burger'>Burgerino</Link>
            </div>
        );
    }
});
