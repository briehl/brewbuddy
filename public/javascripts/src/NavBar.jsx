var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var History = Router.History;
var Lifecycle = Router.Lifecycle;

var AppBar = require('material-ui/lib/app-bar');
var IconMenu = require('material-ui/lib/menus/icon-menu');
var IconButton = require('material-ui/lib/icon-button');
var MenuItem = require('material-ui/lib/menus/menu-item');
var MenuIcon = require('material-ui/lib/svg-icons/navigation/menu');
var AndroidIcon = require('material-ui/lib/svg-icons/action/android');

var Toolbar = require('material-ui/lib/toolbar/toolbar');
var ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
var ToolbarSeparator = require('material-ui/lib/toolbar/toolbar-separator');
var ToolbarTitle = require('material-ui/lib/toolbar/toolbar-title');
var DropDownMenu = require('material-ui/lib/drop-down-menu');
var DropDownIcon = require('material-ui/lib/drop-down-icon');
var FontIcon = require('material-ui/lib/font-icon');
var RaisedButton = require('material-ui/lib/raised-button');

var NavBar = React.createClass({
    mixins: [ History ],

    routerWillLeave: function() {

    },

    _menuItemClicked: function(e, item) {
        console.log(item);
        if (item.props.route) {
            this.setState({ textValue: ''}, function() { this.history.pushState(null, item.props.route) });
        }
    },

    render: function() {
        return (
            <AppBar
             title="Bill's Brew Buddy"
             iconElementLeft = {<IconButton><AndroidIcon /></IconButton>}
             iconElementRight = {
                <IconMenu iconButtonElement = {<IconButton><MenuIcon /></IconButton>} onItemTouchTap={this._menuItemClicked}>
                    <MenuItem primaryText="About" route="/about" />
                    <MenuItem primaryText="Users" route="/users" />
                    <MenuItem primaryText="Sign out" />
                </IconMenu>
             } 
             style={{ position: 'fixed', top: 0 }} />
        );
    }
});

module.exports = NavBar;

