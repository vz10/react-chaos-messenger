var React = require('react');
var ReactDOM = require('react-dom');

import { selectMessage, unselectMessage } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
var classNames = require('classnames');


require('./../css/Note.css');

var Note = React.createClass({
    onHover: function () {
        this.props.selectMessage(this.props.id);
    },
    onUnHover: function () {
        this.props.unselectMessage(this.props.id);
    },
    render: function() {
        var classes = classNames({
           'bubble': true,
           'red': this.props.id == this.props.max_id,
           'yellow': this.props.id == this.props.min_id,
           'shaking': this.props.id == this.props.before_selected
         });
        return (
            <div className={classes} onMouseEnter={this.onHover} ref="message"
            onMouseLeave={this.onUnHover}>
                {this.props.children}
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {selected: state.selected};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectMessage, unselectMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
