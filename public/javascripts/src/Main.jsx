var React = require('react');
var NavBar = require('./NavBar.jsx');
var ThemeManager = require('material-ui/lib/styles/theme-manager');
var LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const Filler = require('./Filler.jsx');

const Main = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getInitialState: function() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
        };
    },

    getChildContext: function() {
        return {
            muiTheme: this.state.muiTheme,
        };
    },

    componentWillMount: function() {
        var newMuiTheme = ThemeManager.modifyRawThemePalette(
            this.state.muiTheme, 
            { accent1Color: Colors.deepOrange500 }
        );

        this.setState({muiTheme: newMuiTheme});
    },

    render: function() {
        return(
            <div>
                <NavBar />
                <Filler />
                { this.props.children }
            </div>
        )
    } 
});

module.exports = Main;