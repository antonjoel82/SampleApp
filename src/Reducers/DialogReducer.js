import { SHOW_DIALOG, HIDE_DIALOG } from '../Actions/action-constants.js';

const initialState = {
  dialogs: []
  // dialogs: [{ dialogProps: { open: true, message: 'Sample Error Message.' }, dialogType: 'alert' }]
  // dialogType: null,
  // dialogProps: { open: false }
};

export const dialog = (state = initialState, action = {}) => {
  // Must clone the array because React uses shallow equality for state comparisons
  const dialogs = [...state.dialogs];

  switch (action.type) {
    case SHOW_DIALOG:
      dialogs.push({ dialogType: action.dialogType, dialogProps: action.dialogProps });
      return Object.assign({}, { dialogs });
    case HIDE_DIALOG:
      dialogs.pop();
      return Object.assign({}, { dialogs });
    default:
      return state;
  }
};
