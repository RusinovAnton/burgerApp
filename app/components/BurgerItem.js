var React = require('react');

export defaultReact.createClass({
   render: function(){
       return (
         <li>
             <span className="cost">{this.props.burger.cost}</span>
             <span className="cal">{this.props.burger.cal}</span>
         </li>
       );
   }
});
