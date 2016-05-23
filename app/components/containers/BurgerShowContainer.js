var React = require('react');
var BurgerShow = require('../BurgerShow');

var fetchStatus = require('../../utils/fetchStatus');
var fetchjson = require('../../utils/fetchjson');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
            data: []
        }
    },
    componentWillMount: function () {
        var _this = this;
        // Native AJAX
        _this.setState({isLoading: true});
        fetch('/api/burgerList')
            .then(fetchStatus)
            .then(function (res) {
                _this.setState({isLoading: false});
                res.json().then(function (data) {
                    _this.setState({data: data});
                });
            })
            .catch(function (error) {
                if (_this.state.isLoading) _this.setState({isLoading: false});
                console.log(error);
            });
    },
    componentWillUnmount: function () {
        this.req.abort();
    },
    render: function () {
        return ( <BurgerShow
                isLoading={ this.state.isLoading }
                burgerList={ this.state.data }
            />
        );
    }
});
