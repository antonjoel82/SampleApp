import {SIGN_IN, SIGN_OUT, REGISTER} from '../action-constants.js';

export const requestSignIn = (login, password) => {
	//
	//Sign in code goes here.
	//

	return {
		type: SIGN_IN,
		payload: {
			user: {
				id: 1,
				login
			}
		}
	}
}