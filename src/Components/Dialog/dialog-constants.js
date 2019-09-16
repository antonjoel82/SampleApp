import AlertModal from './AlertModal';
import AddTagDialog from './AddTagDialog';
import ConfirmDialog from './ConfirmDialog';
import UploadDialog from './UploadDialog';

export const DialogTypes = {
  alert: 'alert',
  addTag: 'addTag',
  confirm: 'confirm',
  upload: 'upload',
  default: 'default'
};

export const DialogComponents = {
  alert: AlertModal,
  addTag: AddTagDialog,
  confirm: ConfirmDialog,
  upload: UploadDialog,
  default: AlertModal
};

export const getComponentByDialogType = (dialogType) => {
  return DialogComponents[dialogType || DialogTypes.default];
};
