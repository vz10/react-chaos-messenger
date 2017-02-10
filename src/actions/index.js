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

export function setName(name) {
    console.log(getState());
    return {
        type: 'SET_NAME',
        payload: name
    }
}

export function setArrow(arrow) {
    return {
        type: 'SET_ARROW',
        payload: arrow
    }
}

export function hideArrow() {
    return {
        type: 'HIDE_ARROW',
    }
}

export function addCollapseMessage(id) {
    return {
        type: 'ADD_TO_COLLAPSE',
        payload: id
    }
}

export function removeCollapseMessage(id) {
    return {
        type: 'REMOVE_FROM_COLLAPSE',
        payload: id
    }
}

export function expandAll() {
    return {
        type: 'EXPAND_ALL',
    }
}
