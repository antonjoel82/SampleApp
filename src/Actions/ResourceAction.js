import { GET_RESOURCE_STARTED, GET_RESOURCE_SUCCESS, GET_RESOURCE_FAILED } from './action-constants.js';

export const getResource = (publicKey) => {
  return {
    type: GET_RESOURCE_STARTED,
    resourceKey: publicKey
  };
};

export const getResourceSuccess = (resource) => {
  return {
    type: GET_RESOURCE_SUCCESS,
    resource: resource
  };
};

export const getResourceFailed = ({ resource }) => {
  return {
    type: GET_RESOURCE_FAILED,
    resource: resource
  };
};
