import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './Reducers/reducers.js';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();

export const history = createBrowserHistory();

export default function configureStore (preloadedState) {
  return createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk,
        logger
      )
    )
  );
}
