export default function(state = [], action) {
  switch (action.type) {
    case 'SET_NAME':
        return action.payload
  }
  return state;
}
