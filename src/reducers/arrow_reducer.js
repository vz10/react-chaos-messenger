export default function(state = [], action) {
  switch (action.type) {
    case 'SET_ARROW':
        return action.payload;
    case 'HIDE_ARROW':
        return null;
  }
  return state;
}
