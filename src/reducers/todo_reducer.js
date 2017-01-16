export default function(state = [], action) {
  switch (action.type) {
    case 'INIT_TODO':
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        return localNotes;
    case 'ADD_NOTE':
        var newNotes = (state || []).slice();
        newNotes.unshift(action.payload);
        localStorage.setItem('notes', JSON.stringify(newNotes));
        return newNotes;
    case 'DELETE_NOTE':
        var notes = state.filter(function (item) {
                                    return item.id != action.payload;
                                });
        localStorage.setItem('notes', JSON.stringify(notes));
        return notes;
  }
  return state;
}
