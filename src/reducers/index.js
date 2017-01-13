import { combineReducers } from 'redux';
import ToDoReducer from './todo_reducer';

const rootReducer = combineReducers({
  notes: ToDoReducer
});

export default rootReducer;
