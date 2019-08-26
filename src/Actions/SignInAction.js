import { SIGN_IN, SIGN_OUT, REGISTER } from '../action-constants.js';

export const requestSignIn = (login, password) => {
  //
  // Sign in code goes here.
  //

  return {
    type: SIGN_IN,
    payload: {
      user: {
        id: 1,
        login
      }
    }
  };
};

export const requestSignOut = () => {
  return {
    type: SIGN_OUT,
    payload: {}
  };
};

export const requestRegister = (name, email, username, password) => {
  //
  // Sign in code goes here.
  //

  return {
    type: REGISTER,
    payload: {
      name, email, username, password
    }
  };
};
