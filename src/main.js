var ReactDOM = require('react-dom');
var React = require('react');
import { Provider } from 'react-redux'
import { createStore } from 'redux';

var NotesApp = require('./components/NotesApp.jsx');
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <NotesApp />
    </Provider>,
    document.getElementById('mount-point')
);