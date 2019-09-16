import AlertModal from './AlertModal';
import AddTagDialog from './AddTagDialog';
import ConfirmDialog from './ConfirmDialog';

export const DialogTypes = {
  alert: 'alert',
  addTag: 'addTag',
  confirm: 'confirm',
  default: 'default'
};

export const DialogComponents = {
  alert: AlertModal,
  addTag: AddTagDialog,
  confirm: ConfirmDialog,
  default: AlertModal
};

export const getComponentByDialogType = (dialogType) => {
  return DialogComponents[dialogType || DialogTypes.default];
};
