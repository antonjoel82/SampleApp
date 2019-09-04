import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VotesDisplay from '../VotesDisplay/VotesDisplay.js';
import TemporalDisplay from '../TemporalDisplay/TemporalDisplay.js';

const useStyles = makeStyles(theme => ({
  metaContainer: {
    display: 'flex',
    width: 'auto',
    justifyContent: 'space-between',
    marginTop: 0,
    paddingTop: 0
  }
}));

const CardMetadata = () => {
  const classes = useStyles();

  return (
    <Box className={classes.metaContainer}>
      <VotesDisplay />
      <TemporalDisplay />
    </Box>
  );
};
export default CardMetadata;
