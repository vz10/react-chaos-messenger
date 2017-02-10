import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import SelectedReducer from './selected_reducer';
import NameReducer from './name_reducer';
import ArrowReducer from './arrow_reducer';
import CollapseReducer from './collapse_reducer';
import CommonReducer from './common_reducer'
import reduceReducers from 'reduce-reducers'

const rootReducer = reduceReducers(
                        combineReducers({
                          selected: SelectedReducer,
                          name: NameReducer,
                          arrow: ArrowReducer,
                          collapsed: CollapseReducer,
                          firebase,
                          max_id: (state=[]) => state,
                          min_id: (state=[]) => state,
                          ids_list: (state=[]) => state
                        }), CommonReducer);

export default rootReducer;
