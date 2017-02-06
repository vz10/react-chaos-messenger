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

export function selectMessage(id) {
    return {
        type: 'SELECT_MESSAGE',
        payload: id
    }
}

export function unselectMessage(id) {
    return {
        type: 'UN_SELECT_MESSAGE',
        payload: id
    }
}
