var ReactDOM = require('react-dom');
var React = require('react');
import { Provider } from 'react-redux'
import { createStore } from 'redux';

var NotesApp = require('./components/NotesApp.jsx');
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <NotesApp />
    </Provider>,
    document.getElementById('mount-point')
);