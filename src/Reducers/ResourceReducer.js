import { GET_RESOURCE_STARTED, GET_RESOURCE_SUCCESS, GET_RESOURCE_FAILED } from '../Actions/action-constants.js';

const initialState = {
  activeResource: null
};

export const resource = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RESOURCE_STARTED:
      return Object.assign({}, { activeResourceId: action.resourceKey });
    default:
      return state;
  }
};
