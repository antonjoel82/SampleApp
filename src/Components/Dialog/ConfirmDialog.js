import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import BaseDialog from './BaseDialog';

const useStyles = theme => ({
  root: {
    display: 'flex'
  }
});

const ConfirmDialog = (props) => {
  const handleOkSuper = (event) => {
    // Calls passed-in handleOk
    if (props.handleOk) {
      props.handleOk();
      // return;
    }
    props.handleClose();
  };

  const handleCancelSuper = (event) => {
    // Calls passed-in handleOk
    if (props.handleCancel) {
      props.handleCancel();
      // return;
    }
    props.handleClose();
  };

  return (
    <BaseDialog
      {...props}
      title={props.title}
      message={props.message}
      handleOk={handleOkSuper}
      handleCancel={handleCancelSuper}
    />
  );
};
export default connect(null, { push })(withStyles(useStyles)(ConfirmDialog));
