import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import MessengerApp from '../components/MessengerApp.jsx';

const mockStore = configureStore();

describe('MessengerApp', function () {
    it('renders without problems', function () {
        const initialState = {messages:[]};
        const store = mockStore(initialState);

        let root = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <MessengerApp />
            </Provider>
        );
        expect(root).toExist();
    });
});
