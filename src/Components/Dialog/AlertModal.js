import React from 'react';
import BaseDialog from './BaseDialog';

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
export default AlertModal;
