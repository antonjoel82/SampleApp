import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchResourceCard from '../SearchResourceCard/SearchResourceCard.js';

const styles = (theme) => ({
  root: {
    display: 'flex'
  }
});

const SearchGrid = (props) => {
  const { classes, resources } = props;
  const resArr = resources || [];

  return (
    <Box className={classes.root}>
      <Grid container direction='column' spacing={2}>
        {
          resArr.map((resource, i) => {
            return (
              <Grid key={i /*resource.id*/} item xs spacing={2}>
                <SearchResourceCard key={i /*resource.id*/} resource={resource} />
              </Grid>
            );
          })
        }
      </Grid>
    </Box> 
  );
};

SearchGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchGrid);
