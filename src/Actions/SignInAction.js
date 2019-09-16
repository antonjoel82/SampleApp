import { SIGN_IN_SUCCESS, SIGN_IN_FAILED, SIGN_OUT } from './action-constants.js';
import { ENDPOINT } from '../constants.js';

import fetch from 'isomorphic-fetch';
import promise from 'es6-promise';
import { push } from 'connected-react-router';

promise.polyfill();

export const requestSignIn = ({ login, password }) => {
  fetch(`${ENDPOINT}/signin`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, password })
  })
    .then(response => response.json())
    .then(response => {
      console.debug(JSON.stringify(response));
      if (!response.user) {
        window.alert(response.reason);
        return signInFailure(new Error('User not retrieved.'));
      }
      push('/'); // Redirect to home page
      return signInSuccess(response.user);
    })
    .catch(err => {
      console.error('Error! Could not register user.', err);
      return signInFailure(err);
    });

  return signInFailure(new Error('Unexpected Outcome. Investigate!'));
};

const signInSuccess = (user) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { user }
  };
};

const signInFailure = (err) => {
  return {
    type: SIGN_IN_FAILED,
    payload: { err }
  };
};

export const requestSignOut = () => {
  return {
    type: SIGN_OUT,
    payload: {}
  };
};

// export const handleRegister = ({ firstName, lastName, email, username, password }) => {
//   //
//   // Sign in code goes here.
//   //

//   const name = { first: firstName, last: lastName };

//   return {
//     type: REGISTER,
//     payload: {
//       name, email, username, password
//     }
//   };
// };
