export default function(state = [], action) {
  switch (action.type) {
    case 'INIT_TODO':
        var localNotes = JSON.parse(localStorage.getItem('notes')) || [];
        return localNotes;
    case 'ADD_NOTE':
        var newNotes = (state || []).slice();
        newNotes.unshift(action.payload);
        localStorage.setItem('notes', JSON.stringify(newNotes));
        return newNotes;
    case 'SELECT_MESSAGE':
        return {id: action.payload};
    case 'UN_SELECT_MESSAGE':
            return {};
  }
  return state;
}
