import React from 'react';
import { connect } from 'react-redux';
import { getComponentByDialogType } from '../Dialog/dialog-constants';

// class DialogContainer extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       isOpen: false
//     };

//     this.handleClose = this.handleClose.bind(this);
//   }

//   handleClose (event) {
//     this.setState(Object.assign({}, { isOpen: false }));
//   }

//   componentWillReceiveProps (nextProps) {
//     if (nextProps !== this.props) {
//       this.setState(Object.assign({}, { isOpen: nextProps.dialogProps.isOpen }));
//     }
//   }

//   render () {
//     const { dialogProps, dialogType } = this.props;
//     const SpecificDialog = getComponentByDialogType(dialogType);

//     return (
//       <SpecificDialog {...dialogProps} />
//     );
//   }
// }

const DialogContainer = ({ dialogProps, dialogType }) => {
  const SpecificDialog = getComponentByDialogType(dialogType);
  return (<SpecificDialog {...dialogProps} />);
};

const mapStateToProps = (state) => {
  return { ...state.dialog };
};

export default connect(mapStateToProps)(DialogContainer);
