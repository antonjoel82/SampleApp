import { SIGN_IN_SUCCESS, SIGN_IN_FAILED } from '../Actions/action-constants.js';

const baseStateSignIn = {
  signedIn: false,
  user: null
};

export const signIn = (state = baseStateSignIn, action = {}) => {
  let user = null;

  switch (action.type) {
    case SIGN_IN_SUCCESS:
      user = action.payload.user;
      if (user && user.id) {
        return Object.assign({}, state, { signedIn: true, user: user });
      }
      return state;
    case SIGN_IN_FAILED:
      // TODO: do I need to do anything with action.payload.err?
      return state;
    default:
      return state;
  }
};
