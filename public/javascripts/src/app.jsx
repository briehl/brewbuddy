var $ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var Jobs = require('./Jobs.jsx');
var Main = require('./Main.jsx');
var About = require('./About.jsx');

window.React = React;
injectTapEventPlugin();

var NoMatch = React.createClass({
    render: function() {
        return (
            <div>
                <h1>404d!</h1>
                { this.props.children }
            </div>
        )
    }
});

var Users = React.createClass({
    getInitialState: function() {
        return {
            users: [
                {
                    id: 1,
                    name: 'Peter'
                },
                {
                    id: 2,
                    name: 'Quagmire'
                }
            ]
        }
    },

    render: function() {
        return (
            <div>
                <h1>Users</h1>
                <div className="master">
                    <ul>
                    { }
                    {this.state.users.map(function(user) {
                        return (
                            <li key={user.id}><Link to={'/user/${user.id}'}>{user.name}</Link></li>
                        );
                    })}
                    </ul>
                </div>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

var User = React.createClass({
    componentDidMount() {
        this.setState({
            user: findUserById(this.props.params.userId)
        });
    },

    render() {
        return (
            <div>
                <h2>{this.state.user.name}</h2>
            </div>
        );
    }
});

ReactDOM.render(
    <Router history={ createBrowserHistory() }>
        <Route path="/" component={ Main }>
            <Route path="about" component={ About } />
            <Route path="users" component={ Users }>
                <Route path="/user/:userId" component={ User } />
            </Route>
        </Route>
    </Router>,
    document.getElementById('job-post')
);