var ReactDOM = require('react-dom');
var React = require('react');
import { Provider } from 'react-redux'
import configureStore from './store/store'

var MessangerApp = require('./components/MessangerApp.jsx');

const initialState = window.__INITIAL_STATE__ || {firebase: { authError: null }}
const store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <MessangerApp />
    </Provider>,
    document.getElementById('mount-point')
);
