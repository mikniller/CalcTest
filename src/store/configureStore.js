import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import yearReducer from '../reducers';
import DevTools from '../containers/DevTools';

const logger = store => next => action => {
//  console.group(action.type)
//  console.info('dispatching', action)
  let result = next(action)
  // console.log('next state', store.getState())
  // console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = compose(
  // Middleware you want to use in development:

  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(logger)
);





export default function configeStore(initialState) {

  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  //const store = createStore(yearReducer, initialState,   applyMiddleware(logger));
  const store = createStore(yearReducer, initialState, enhancer);



  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
