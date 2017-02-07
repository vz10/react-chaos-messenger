var React = require('react');
var MessageEditor = require('./MessageEditor.jsx');
var MessageLayout = require('./MessageLayout.jsx');

require('./../css/MessangerApp.css');

var MessangerApp = React.createClass({
    render: function() {
        return (
            <div className="messanger-app">
                <h2 className="app-header">Chaos messenger</h2>
                <MessageEditor  />
                <MessageLayout />
            </div>
        );
    },
});

module.exports = MessangerApp;
