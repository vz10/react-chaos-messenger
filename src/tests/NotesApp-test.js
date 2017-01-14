import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import NotesApp from '../components/NotesApp.jsx';

const mockStore = configureStore();

describe('NotesApp', function () {
    it('renders without problems', function () {
        const initialState = {notes:[]};
        const store = mockStore(initialState);

        let root = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <NotesApp />
            </Provider>
        );
        expect(root).toExist();
    });
});