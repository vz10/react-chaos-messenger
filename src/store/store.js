import { createStore, compose } from 'redux'
import rootReducer from '../reducers/index'
import { reduxFirebase } from 'react-redux-firebase'

// Replace with your Firebase config
const fbConfig = {
  apiKey: 'AIzaSyAWTmzhA91EJGwbRYWsjVstvdrHloPXHZs',
  authDomain: 'sizzling-heat-2355.firebaseio.com',
  databaseURL: 'https://sizzling-heat-2355.firebaseio.com'
}

export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
    reduxFirebase(fbConfig, { userProfile: 'users' }),
    // Redux Devtools
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer)
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}