import React from 'react';
import { Box, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // wrapper: {
  //   '&:hover': {
  //     // color: 'white',
  //     borderColor: theme.palette.primary.main,
  //     backgroundColor: theme.palette.primary.light,
  //     cursor: 'pointer'
  //   }
  // },
  label: {
    // fontSize: theme.typography.subtitle2.fontSize,
    fontSize: '0.75rem' // TODO define a property for this
  }
}));

const Tag = ({ key, label, variant, onDelete }) => {
  const classes = useStyles();

  function handleClick (event) {
    window.alert(`You clicked on ${event.target.textContent}!`);
  }

  return (
    <Box m={0.5}>
      <Chip
        className={classes.todo}
        key={key}
        label={label}
        color='default'
        variant={variant || 'default'}
        size='medium'
        onClick={handleClick}
        onDelete={onDelete}
      />
    </Box>

  );
};
export default Tag;
