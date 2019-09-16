import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trueIcon: {
    color: 'green'
  }
});

const DEFAULT_SIZE = 'large';

const IconSwitcher = (props) => {
  const { classes, status, TrueIcon, FalseIcon, trueIconColor, falseIconColor, size } = props;
  return (
    <Box p={1} className={classes.root}>
      {
        status
          ? <TrueIcon fontSize={size || DEFAULT_SIZE} className={classes.trueIcon} color={trueIconColor} />
          : <FalseIcon fontSize={size || DEFAULT_SIZE} color={falseIconColor || 'error'} />
      }
    </Box>
  );
};

IconSwitcher.propTypes = {
  classes: PropTypes.object.isRequired,
  TrueIcon: PropTypes.object.isRequired,
  FalseIcon: PropTypes.object.isRequired
};

export default withStyles(styles)(IconSwitcher);
