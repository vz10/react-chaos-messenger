export function initTodo() {
    return {
      type: 'INIT_TODO',
    }
}

export function addNote(newNote) {
    return {
        type: 'ADD_NOTE',
        payload: newNote
    }
}

export function deleteNote(id) {
    return {
        type: 'DELETE_NOTE',
        payload: id
    }
}