// Import Dependencies
import App from './containers/App';
import { createBrowserHistory } from 'history';
import { fromJS } from 'immutable';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import Perf from 'react-addons-perf';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import combineReducers from './utils/combineReducers';

import categories from './constants/categories';
import terms, { maxSeenCount } from './constants/terms';

import { CATEGORIES as categoriesKey } from './selectors/categories';
import { SOUND_ENABLED as soundEnabledKey } from './selectors/sound';
import { MAX_SEEN_COUNT as maxSeenCountKey, TERMS as termsKey } from './selectors/terms';

// Import global styles for the app
import './assets/globalStyles';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create a history object, which abstracts away the differences
// in various environments and provides a minimal API that lets us
// manage the history stack, navigate, confirm navigation, and persist state between sessions.
// We'll be using the "browser" flavor of history (rather than in-memory or hash-based);
// it is designed for modern web browsers that support the HTML5 history API.
const history = createBrowserHistory();

// Create a redux store for the app, applying our custom reducers and saga middleware.
// Note that we're using a custom combineReducers function and a custom route reducer,
// which can support immutable state objects;
const initialState = fromJS({
  [categoriesKey]: categories,
  [maxSeenCountKey]: maxSeenCount,
  [soundEnabledKey]: true,
  [termsKey]: terms
});

const store = createStore(
  combineReducers({
    ...reducers,
  }, initialState),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
);

// Register our each of our sagas. This needs to happen _after_ the saga middleware
// has been mounted to the store. (See above)
sagas.forEach(sagaMiddleware.run);

// Render our App component to the #app div (see template.html).
render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.querySelector("#app")
);

// If hot-reload is available, configure the application to automatically reload
// when updates to ./App.jsx (or any of its dependencies) are detected
if (module && module.hot) {
  module.hot.accept('./containers/App', () => {
    render(<App/>, document.querySelector("#app"));
  });
}

// Expose Perf to window for debuggin
window.Perf = Perf;
