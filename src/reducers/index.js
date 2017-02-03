import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import ToDoReducer from './todo_reducer';

const rootReducer = combineReducers({
    notes: ToDoReducer,
    firebase
});

export default rootReducer;
