import React from 'react';
import { IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { showDialog, hideDialog } from '../../Actions/DialogAction';
import PropTypes from 'prop-types';

const OpenDialogButton = (props) => {
  const { icon, showDialog, dialogType, dialogProps, color } = props;

  const handleClick = (event) => {
    showDialog(dialogProps || {}, dialogType);
  };

  return (
    <IconButton color={color || 'inherit'} onClick={handleClick}>
      {React.createElement(icon, { fontSize: 'default' })}
    </IconButton>
  );
};

OpenDialogButton.propTypes = {
  icon: PropTypes.node.isRequired,
  dialogType: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDialog: (dialogProps, dialogType) => dispatch(showDialog({ dialogProps, dialogType })),
    hideDialog: () => dispatch(hideDialog())
  };
};

export default connect(null, mapDispatchToProps)(OpenDialogButton);
