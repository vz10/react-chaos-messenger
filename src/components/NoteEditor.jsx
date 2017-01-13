var React = require('react');
import { addNote } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



require('./../css/NoteEditor.css');

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        };
    },

    handleTextChange: function(event) {
        this.setState({ text: event.target.value });
    },

    handleNoteAdd: function() {
        var newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };

        this.props.addNote(newNote);
        this.setState({ text: '' });
    },

    render: function() {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addNote: addNote }, dispatch);
}

export default connect((state) => state, mapDispatchToProps)(NoteEditor);
