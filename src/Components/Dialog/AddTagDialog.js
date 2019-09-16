import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import ConfirmDialog from './ConfirmDialog';
import AddTagForm from '../AddTagForm/AddTagForm';

import { MAX_TAG_LABEL_LENGTH } from '../../server-constants.js';
import { DialogTypes } from './dialog-constants';
import { showDialog, hideDialog } from '../../Actions/DialogAction';


const useStyles = theme => ({
  root: {
    display: 'flex'
  }
});

const AddTagDialog = (props) => {
  const [errMsg, setErrMsg] = React.useState(null);
  const [label, setLabel] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [labelIsValid, setLabelIsValid] = React.useState(false);

  const validateLabel = (label) => {
    let valid = true;
    if (!(label.length > 0 && label.length <= MAX_TAG_LABEL_LENGTH)) {
      setErrMsg(`Please enter a Label between 1 and ${MAX_TAG_LABEL_LENGTH} characters long.`);
      valid = false;
    }
    if (false /* labelExists */) {
      setErrMsg(`Label "${label} already exists. Please enter a new label.`);
      valid = false;
    }

    if (valid) {
      setErrMsg(null);
    }

    setLabelIsValid(valid);
    return valid;
  };

  const handleOk = () => {
    const tag = {
      label,
      summary
    };

    if (!labelIsValid || errMsg) {
      props.showDialog({
        message: errMsg
      }, DialogTypes.alert);
    }
    return tag;
  };

  return (
    <ConfirmDialog
      {...props}
      setLabel={setLabel}
      setSummary={setSummary}
      labelIsValid={labelIsValid}
      validateLabel={validateLabel}
      dialogBody={<AddTagForm />}
      title='Create a New Tag'
      message='Fill out the form below to create a new UltiDB Tag!'
      handleOk={handleOk}
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

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(AddTagDialog));
