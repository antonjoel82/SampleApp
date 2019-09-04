import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { signIn } from './SignInReducer.js';

export default function createRootReducer (history) {
  return combineReducers({
    router: connectRouter(history),
    signIn
  });
}

export const INITIAL_STATE = {
  signedIn: false,
  user: null,
  filters: [],
  resources: {}, // id -> resource
  activeResource: null // id
};
