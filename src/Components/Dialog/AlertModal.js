import React from 'react';
import BaseDialog from './BaseDialog';
import PropTypes from 'prop-types';

const AlertModal = (props) => {
  const { open, title, message } = props;

  return (
    <BaseDialog
      {...props}
      open={open}
      title={title}
      message={message}
    />
  );
};

AlertModal.propTypes = {
  message: PropTypes.string.isRequired
};

export default AlertModal;
