var React = require('react');
var Link = require('react-router').Link;

export defaultReact.createClass({
    render: function(){
        return (
            <div>
                <Link to='/burger'>Burgerino</Link>
            </div>
        );
    }
});
