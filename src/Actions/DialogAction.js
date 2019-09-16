import { SHOW_DIALOG, HIDE_DIALOG } from './action-constants.js';

export const showDialog = ({ dialogProps, dialogType }) => (dispatch) => {
  // Should always set to true to show dialog
  dialogProps.open = true;
  // Should always be able to close the dialog
  dialogProps.handleClose = () => dispatch(hideDialog());

  dispatch({
    type: SHOW_DIALOG,
    dialogProps,
    dialogType
  });
};

export const hideDialog = () => (dispatch) => {
  dispatch({ type: HIDE_DIALOG });
};
