var ReactDOM = require('react-dom');
var React = require('react');
import { Provider } from 'react-redux'
import configureStore from './store/store'

var MessengerApp = require('./components/MessengerApp.jsx');

const initialState = window.__INITIAL_STATE__ || {firebase: { authError: null }}
const store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <MessengerApp />
    </Provider>,
    document.getElementById('mount-point')
);
