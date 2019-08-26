import { SIGN_IN, SIGN_OUT } from '../action-constants.js';

const baseStateSignIn = {
  signedIn: false,
  user: {}
};

export const signIn = (state = baseStateSignIn, action = {}) => {
  let user = null;

  switch (action.type) {
    case SIGN_IN:
      user = action.payload.user;
      if (user.id) {
        return Object.assign({}, state, { signedIn: true, user: user });
      } else {
        window.alert('Credentials were not valid. Please try again!');
        return state;
      }
    case SIGN_OUT:
      return Object.assign({}, state, { signedIn: false, user: {} });
    default:
      return state;
  }
};
