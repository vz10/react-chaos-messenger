export default function(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_COLLAPSE':
        return [action.payload, ...state].sort();
    case 'REMOVE_FROM_COLLAPSE':
        return state.filter((item) => item != action.payload);
  }
  return state;
}
