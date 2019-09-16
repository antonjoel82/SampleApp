import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import ConfirmDialog from './ConfirmDialog';
import AddTagForm from '../AddTagForm/AddTagForm';

import { MAX_TAG_LABEL_LENGTH, MAX_SUMMARY_LENGTH } from '../../server-constants.js';
import { DialogTypes } from './dialog-constants';
import { showDialog, hideDialog } from '../../Actions/DialogAction';

const AddTagDialog = (props) => {
  let errMsg = null;

  const [label, setLabel] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [labelIsValid, setLabelIsValid] = React.useState(false);

  const validateLabel = (label) => {
    let valid = true;
    if (!(label.length > 0 && label.length <= MAX_TAG_LABEL_LENGTH)) {
      errMsg = `Please enter a Label between 1 and ${MAX_TAG_LABEL_LENGTH} characters long.`;
      valid = false;
    }
    if (false /* labelExists */) {
      errMsg = `Label "${label} already exists. Please enter a new label.`;
      valid = false;
    }

    setLabelIsValid(valid);
    return valid;
  };

  const validateSummary = (summary) => {
    if (!(summary.length > 0 && summary.length <= MAX_SUMMARY_LENGTH)) {
      errMsg = `Please enter a Summary between 1 and ${MAX_SUMMARY_LENGTH} characters long.`;
      return false;
    }
    return true;
  };

  const handleOk = () => {
    const tag = {
      label,
      summary
    };

    if (!validateLabel(label) || !validateSummary(summary)) {
      props.showDialog({
        message: errMsg
      }, DialogTypes.alert);
      return;
    }
    props.hideDialog();
    return tag;
  };

  return (
    <ConfirmDialog
      {...props}
      dialogBody={
        <AddTagForm
          setLabel={setLabel}
          setSummary={setSummary}
          labelIsValid={labelIsValid}
          validateLabel={validateLabel}
        />
      }
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

export default connect(null, mapDispatchToProps)(AddTagDialog);
