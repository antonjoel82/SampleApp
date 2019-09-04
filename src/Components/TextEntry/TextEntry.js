import React from 'react';
import {
  TextField,
  Grid
} from '@material-ui/core';

const TextEntry = ({ name, label, type, autoComplete, onChange, smOverride, required, autoFocus }) => {
  return (
    <Grid item xs={12} sm={smOverride}>
      <TextField
        id={name}
        name={name}
        label={label}
        type={type}
        autoComplete={autoComplete}
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
        fullWidth
        variant='outlined'
      />
    </Grid>
  );
};

export default TextEntry;
