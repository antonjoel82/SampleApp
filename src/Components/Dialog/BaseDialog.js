import React from 'react';
import { DialogTitle, DialogContent, DialogContentText, Dialog, DialogActions, Button, Container } from '@material-ui/core';

const BaseDialog = (props) => {
  const { id, title, message, dialogBody, open, handleClose, handleCancel, handleOk } = props;

  /**
   * If there is a dialogBody (children Component), wrap the whole content area in a container
   */
  const renderDialogContent = () => {
    const standardBody = (
      <DialogContent>
        {message && (<DialogContentText>{message}</DialogContentText>)}
        {dialogBody}
      </DialogContent>
    );
    return dialogBody ? <Container component='main' maxWidth='sm'>{standardBody}</Container> : standardBody;
  };

  return (
    <Dialog open={open} onClose={handleClose} id={id}>
      <DialogTitle id={id}>{title}</DialogTitle>
      {renderDialogContent()}
      <DialogActions>
        {handleCancel && <Button onClick={handleCancel}>Cancel</Button>}
        {handleOk && <Button onClick={handleOk}>Ok</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default BaseDialog;
