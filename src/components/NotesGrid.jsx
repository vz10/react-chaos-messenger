var React = require('react');
var Note = require('./Note.jsx');

import { initTodo } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { firebaseConnect, helpers } from 'react-redux-firebase'
const { isLoaded, isEmpty, dataToJS } = helpers

require('./../css/NotesGrid.css');

var NotesGrid = React.createClass({    
    defaultProps: {
        notes: []
    },
    componentDidMount: function() {
        this.props.initTodo();
    },
    render: function() {
        var {messages} = this.props;
        return (
            <div className="notes-grid" ref="grid">
                {!isLoaded(messages) ? 
                    'Loading' : isEmpty(messages) ? 'No messages yet': 
                    Object.keys(messages).map(function(key, id){
                        return (
                            <Note
                                key={key}
                                color={messages[key].color}
                                id={messages[key].id}>
                                {messages[key].text}
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
        notes: state.notes,
        messages: dataToJS(state.firebase, '/messages'),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ initTodo }, dispatch);
}

const wrappedNotesGrid = firebaseConnect(['/messages'])(NotesGrid)

export default connect(mapStateToProps, mapDispatchToProps)(wrappedNotesGrid);
