import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import SelectedReducer from './selected_reducer';

const rootReducer = combineReducers({
    selected: SelectedReducer,
    firebase
});

export default rootReducer;
