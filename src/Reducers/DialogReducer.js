import { SHOW_DIALOG, HIDE_DIALOG } from '../Actions/action-constants.js';

const initialState = {
  dialogType: null,
  dialogProps: { open: false }
};

export const dialog = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_DIALOG:
      return Object.assign({}, { dialogType: action.dialogType, dialogProps: action.dialogProps });
    case HIDE_DIALOG:
      return initialState;
    default:
      return state;
  }
};
