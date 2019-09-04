import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { AccessTime as TimeIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center'
  }
}));

const TemporalDisplay = ({ createTime, displayMode }) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <TimeIcon fontSize='small' />
      <Typography variant='subtitle2'>1h 19m</Typography>
    </Box>
  );
};
export default TemporalDisplay;
