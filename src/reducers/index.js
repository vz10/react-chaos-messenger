import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import SelectedReducer from './selected_reducer';
import NameReducer from './name_reducer';

const rootReducer = combineReducers({
    selected: SelectedReducer,
    name: NameReducer,
    firebase
});

export default rootReducer;
