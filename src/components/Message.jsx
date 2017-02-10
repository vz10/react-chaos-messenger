import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import { selectMessage, unselectMessage, addCollapseMessage, removeCollapseMessage,
         setArrow, hideArrow } from '../actions/index';

require('./../css/Message.css');

var Message = React.createClass({
    onHover: function () {
        this.props.selectMessage(this.props.id);
    },
    onUnHover: function () {
        this.props.unselectMessage(this.props.id);
        this.props.hideArrow();
    },
    checkVisible: function() {
      var rect = this.refs.message.getBoundingClientRect(),
          viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      if (rect.bottom < 0) {
        this.props.setArrow('up');
      } else if (rect.top - viewHeight >= 0){
        this.props.setArrow('down');
      }
    },
    componentDidUpdate: function(){
      if (this.props.id == this.props.before_selected){
        this.checkVisible();
      }
    },
    expandHandler: function(){
      var { id, removeCollapseMessage, addCollapseMessage } = this.props;
      if (this.props.collapsed_count > 0){
        removeCollapseMessage(id)
      } else {
        addCollapseMessage(id);
      }
    },
    showName: function(){
      var { name } = this.props;
      return name ? <div><strong>{name}</strong><hr/></div> : '';
    },
    renderCollapsedCounter: function(){
      if (this.props.collapsed_count > 0){
        return <span className="collapsed-counter">{this.props.collapsed_count}</span>
      } else {
        return
      }
    },
    render: function() {
        var classes = classNames({
             'bubble': true,
             'red': this.props.id == this.props.max_id,
             'yellow': this.props.id == this.props.min_id,
             'shaking': this.props.before_selected
            }),
            arrow_class = this.props.collapsed_count > 0 ? "expand-arrows" : "collapse-arrows";

        return (
            <div className={classes} onMouseEnter={this.onHover} ref="message"
            onMouseLeave={this.onUnHover}>
                {this.renderCollapsedCounter()}
                <span className={arrow_class} onClick={this.expandHandler}></span>
                {this.showName()}
                {this.props.children}
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {selected: state.selected};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectMessage,
                                unselectMessage,
                                setArrow,
                                hideArrow,
                                addCollapseMessage,
                                removeCollapseMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
