import React from 'react';
import {
  TextField,
  Grid
} from '@material-ui/core';

const TextEntry = (props) => {
  return (
    <Grid item xs={props.xs || 12} sm={props.smOverride}>
      <TextField
        {...props}
        id={props.name}
        name={props.name}
        fullWidth
        variant='outlined'
      />
    </Grid>
  );
};

export default TextEntry;
