import React from 'react';
import { connect } from 'react-redux';
import { getComponentByDialogType } from '../Dialog/dialog-constants';

const DialogContainer = ({ dialogs }) => {
  return (
    <>
      {
        dialogs.map(({ dialogProps, dialogType }, index) => {
          const SpecificDialog = getComponentByDialogType(dialogType);
          return (<SpecificDialog key={index} {...dialogProps} />);
        })
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return { dialogs: state.dialog.dialogs };
};

export default connect(mapStateToProps)(DialogContainer);
