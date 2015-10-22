var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function() {
        return(
            <div>
                <div>About stuff.</div>
                <ul>
                    <li><Link to="/app">App</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
                { this.props.children }
            </div>
        )
    } 
});