import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex'
  }
}));

const Upload = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography>Default Text</Typography>
    </Box>
  );
};
export default connect(null, { push })(withStyles(useStyles)(Upload));
