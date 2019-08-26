import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { signIn } from './SignInReducer.js';

export default function createRootReducer (history) {
  return combineReducers({
    router: connectRouter(history),
    signIn
  });
}
