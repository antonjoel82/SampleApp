import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  AddCircle as AddIcon,
  Home as HomeIcon,
  AccountCircle as AccountIcon
} from '@material-ui/icons';
import RoutingButton from '../RoutingButton/RoutingButton';
import OpenDialogButton from '../OpenDialogButton/OpenDialogButton';
import { DialogTypes } from '../Dialog/dialog-constants';

const useStyles = makeStyles(theme => ({
  buttonBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  navIcon: {
    width: theme.spacing(5),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
}));

const NavButtonBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.buttonBar}>
      <div className={classes.navIcon}>
        <OpenDialogButton
          icon={AddIcon}
          dialogType={DialogTypes.upload}
        />
      </div>
      <div className={classes.navIcon}>
        <RoutingButton icon={HomeIcon} route='/' />
      </div>
      <div className={classes.navIcon}>
        <RoutingButton icon={AccountIcon} route='/profile' />
      </div>
    </Box>
  );
};
export default NavButtonBar;
