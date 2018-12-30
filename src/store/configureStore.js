import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rooteReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

//  create and export the store
const configureStore = (initialState) => {
  const store = createStoreWithMiddleware(rooteReducer, initialState);

  // do not affect reducer after hot reloading
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rooteReducer);
    })
  }

}
