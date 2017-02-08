import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { firebaseConnect, helpers } from 'react-redux-firebase'

import Message from './Message';
import { initTodo } from '../actions/index';
import { extractDomain } from '../utils/utils'

require('./../css/MessageLayout.css');

const { isLoaded, isEmpty, dataToJS } = helpers
const domain = extractDomain();

var MessageLayout = React.createClass({
    showName: function(message){
      return message.name ? <div><strong>{message.name}</strong><hr/></div> : '';
    },
    render: function() {
        var {messages, selected, collapsed } = this.props,
            max_id = null,
            min_id = null,
            ids_list = null,
            me = this,
            before_selected = null;
        if (!isEmpty(messages)){
          ids_list = Object.keys(messages).map(function(o){return messages[o].id;}).sort();
          max_id = Math.max.apply(null, Object.keys(messages).map(function(o){return messages[o].id;}));
          min_id = Math.min.apply(null, Object.keys(messages).map(function(o){return messages[o].id;}));
        }
        if (selected.id){
          before_selected = Math.max.apply(Math, Object.keys(messages).map(function(o){
                return messages[o].id < selected.id ? messages[o].id : 0;
              }));
        }

        return (
            <div className="messages-layout columns" ref="grid">
                {!isLoaded(messages) ?
                    'Loading' : isEmpty(messages) ? 'No messages yet':
                    Object.keys(messages).map(function(key, id){
                        if (!collapsed.includes(messages[key].id) && messages[key].id < collapsed[collapsed.length-1]){
                          return
                        } else {
                          var index_collapsed = collapsed.indexOf(messages[key].id),
                              collsapsed_count = 0;
                              if (index_collapsed > -1) {
                                if (index_collapsed == 0) {
                                  collsapsed_count = ids_list.indexOf(messages[key].id);
                                } else {
                                  collsapsed_count = ids_list.indexOf(messages[key].id) - ids_list.indexOf(collapsed[index_collapsed-1]);
                                }
                              };
                          return (
                              <Message
                                  key={key}
                                  color={messages[key].color}
                                  max={messages[key].id == max_id}
                                  min={messages[key].id == min_id}
                                  collapsed={index_collapsed > -1}
                                  collsapsed_count = {collsapsed_count}
                                  before_selected={messages[key].id == before_selected}
                                  id={messages[key].id}>
                                  {me.showName(messages[key])}
                                  {messages[key].text}
                              </Message>
                          );
                        }
                    })
                }
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        selected: state.selected,
        messages: dataToJS(state.firebase, '/'+domain),
        collapsed: state.collapsed
    };
}

const wrappedMessageLayout = firebaseConnect(['/'+domain])(MessageLayout)

export default connect(mapStateToProps)(wrappedMessageLayout);
