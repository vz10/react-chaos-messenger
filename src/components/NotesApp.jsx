var React = require('react');
var NoteEditor = require('./NoteEditor.jsx');
var NotesGrid = require('./NotesGrid.jsx');

require('./../css/NotesApp.css');

var NotesApp = React.createClass({
    render: function() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor  />
                <NotesGrid />
            </div>
        );
    },
});

module.exports = NotesApp;
