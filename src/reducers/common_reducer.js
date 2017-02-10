export default function(state = [], action) {
  switch (action.type) {
    case "@@reactReduxFirebase/SET":
      var messages = action.data,
          ids_list = {...state.ids_list} || {},
          max_id = Math.max.apply(null, Object.keys(messages).map(function(o){return messages[o].id;})),
          min_id = Math.min.apply(null, Object.keys(messages).map(function(o){return messages[o].id;}));
          Object.keys(messages).forEach(function(o){ids_list[messages[o].id] == undefined ? ids_list[messages[o].id] = false : '';});
      return {...state, max_id, min_id, ids_list}
    case 'ADD_TO_COLLAPSE':
          var ids_list = {...state.ids_list} || {},
              count = 0;
          Object.keys(ids_list).forEach(function(mess_id){
              if(mess_id < action.payload && !ids_list[mess_id] && !state.collapsed[mess_id]){
                ids_list[mess_id] = action.payload;
                count++;
              }
          });
          return {...state,
                  ids_list,
                  collapsed: {...state.collapsed, [action.payload]: count}};
    case 'REMOVE_FROM_COLLAPSE':
        var ids_list = {...state.ids_list} || {};
        Object.keys(ids_list).forEach(function(mess_id){
            ids_list[mess_id] == action.payload ? ids_list[mess_id] = false : '';
        });
        return {...state, ids_list};
    case 'EXPAND_ALL':
        var ids_list = {...state.ids_list} || {};
        Object.keys(ids_list).forEach(function(mess_id){ids_list[mess_id] = false;});
        return {...state, ids_list};
    default:
      return state;
  }

}
