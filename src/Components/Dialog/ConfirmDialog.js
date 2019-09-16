import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import BaseDialog from './BaseDialog';

const styles = theme => ({
  container: {
    paddingTop: '0 !important'
  }
});

const ConfirmDialog = (props) => {
  const handleOkSuper = (event) => {
    // Calls passed-in handleOk
    if (props.handleOk) {
      props.handleOk();
      return;
    }
    props.handleClose();
  };

  const handleCancelSuper = (event) => {
    // Calls passed-in handleOk
    if (props.handleCancel) {
      props.handleCancel();
      return;
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

ConfirmDialog.propTypes = {
  title: PropTypes.string.isRequired
};

export default connect(null, { push })(withStyles(styles)(ConfirmDialog));
