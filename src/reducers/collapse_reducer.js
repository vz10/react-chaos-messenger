export default function(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_COLLAPSE':
        return {...state, [action.payload]: 0};
    case 'REMOVE_FROM_COLLAPSE':
        var new_state = {...state};
        delete new_state[action.payload];
        return new_state;
    case 'EXPAND_ALL':
      return [];
  }
  return state;
}
