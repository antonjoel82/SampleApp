import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  flexWrapper: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center'
  },
  textComp: {
    padding: theme.spacing(0, 1, 0, 1)
  }
}));

const VotesDisplay = ({ rating, numVotes, readOnly }) => {
  const classes = useStyles();

  return (
    <Box className={classes.flexWrapper}>
      <Rating value={Math.round(Math.random() * 5)} precision={0.5} size='small' readOnly={!!!readOnly} />
      <Typography className={classes.textComp} variant='subtitle2'>8,214 votes</Typography>
    </Box>
  );
};
export default VotesDisplay;
