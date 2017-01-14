var React = require('react');
var Note = require('./Note.jsx');

import { initTodo } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


require('./../css/NotesGrid.css');

var NotesGrid = React.createClass({
    defaultProps: {
        notes: []
    },
    componentDidMount: function() {
        this.props.initTodo();
    },


    render: function() {
        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map(function(note){
                        return (
                            <Note
                                key={note.id}
                                color={note.color}
                                id={note.id}>
                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ initTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesGrid);
