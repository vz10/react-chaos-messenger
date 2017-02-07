import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import { selectMessage, unselectMessage } from '../actions/index';

require('./../css/Message.css');

var Message = React.createClass({
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

export default connect(mapStateToProps, mapDispatchToProps)(Message);
