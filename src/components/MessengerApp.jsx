import React from 'react';

import MessageEditor from './MessageEditor.jsx';
import MessageLayout from './MessageLayout.jsx';

require('./../css/MessengerApp.css');

var MessengerApp = React.createClass({
    render: function() {
        return (
            <div className="messenger-app">
                <h2 className="app-header">Chaos messenger</h2>
                <MessageEditor  />
                <MessageLayout />
            </div>
        );
    },
});

module.exports = MessengerApp;
