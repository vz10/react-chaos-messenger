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
    render: function() {
        var {messages, selected, collapsed, min_id, max_id, ids_list } = this.props,
            before_selected = null;
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
                        if(!ids_list[messages[key].id]){
                          return (
                              <Message
                                  key={key}
                                  color={messages[key].color}
                                  min_id={min_id}
                                  max_id={max_id}
                                  collapsed_count={collapsed[messages[key].id]}
                                  before_selected={messages[key].id == before_selected || messages[key].id == ids_list[before_selected]}
                                  name={messages[key].name}
                                  id={messages[key].id}>
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
        collapsed: state.collapsed,
        max_id: state.max_id,
        min_id: state.min_id,
        ids_list: state.ids_list
    };
}

const wrappedMessageLayout = firebaseConnect(['/'+domain])(MessageLayout)

export default connect(mapStateToProps)(wrappedMessageLayout);
