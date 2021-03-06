import React from 'react';
import { DialogTitle, DialogContent, DialogContentText, Dialog, DialogActions, Button, Container, withStyles } from '@material-ui/core';

const styles = theme => ({
  // Templated styles (ones used below, but not required in all dialogs)
  container: {}
});

const BaseDialog = (props) => {
  const { id, classes, title, message, dialogBody, open, handleClose, handleCancel, handleOk, cancelLabel, okLabel, maxWidth, fullWidth } = props;

  /**
   * Renders the body of the dialog (message and subcomponents).
   * If there is a dialogBody (children Component), wrap the whole content area in a container
   */
  const renderDialogContent = () => {
    const standardBody = (
      <DialogContent className={classes.container}>
        {message && (<DialogContentText>{message}</DialogContentText>)}
        {dialogBody}
      </DialogContent>
    );
    return dialogBody ? <Container component='main' className={classes.container}>{standardBody}</Container> : standardBody;
  };

  const handleOkSuper = (event) => {
    // Calls passed-in handleOk
    if (handleOk) {
      handleOk();
      return;
    }
    props.handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} id={id} fullWidth={fullWidth} maxWidth={maxWidth}>
      {title && <DialogTitle id={id}>{title}</DialogTitle>}
      {renderDialogContent()}
      <DialogActions>
        {handleCancel && <Button onClick={handleCancel}>{cancelLabel || 'Cancel'}</Button>}
        <Button onClick={handleOkSuper}>{okLabel || 'Ok'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(BaseDialog);
