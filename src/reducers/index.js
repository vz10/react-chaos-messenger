import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import SelectedReducer from './selected_reducer';
import NameReducer from './name_reducer';
import ArrowReducer from './arrow_reducer';
import CollapseReducer from './collapse_reducer';

const rootReducer = combineReducers({
    selected: SelectedReducer,
    name: NameReducer,
    arrow: ArrowReducer,
    collapsed: CollapseReducer,
    firebase
});

export default rootReducer;
