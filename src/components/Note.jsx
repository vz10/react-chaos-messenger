var React = require('react');

import { deleteNote } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

require('./../css/Note.css');

var Note = React.createClass({
    onDelete: function () {
        this.props.deleteNote(this.props.id);
    },
    render: function() {
        var style = { backgroundColor: this.props.color };

        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
});

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ deleteNote: deleteNote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
