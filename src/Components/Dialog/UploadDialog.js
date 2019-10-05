import React from 'react';
import ConfirmDialog from './ConfirmDialog';
import Upload from '../Upload/Upload';

// import { DialogTypes } from './dialog-constants';
import { showDialog, hideDialog } from '../../Actions/DialogAction';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const UploadDialog = (props) => {
  return (
    <ConfirmDialog
      {...props}
      maxWidth='xl'
      // fullWidth
      dialogBody={<Upload />}
      title='Upload'
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDialog: (dialogProps, dialogType) => dispatch(showDialog({ dialogProps, dialogType })),
    hideDialog: () => dispatch(hideDialog()),
    push
  };
};

export default connect(null, mapDispatchToProps)(UploadDialog);
