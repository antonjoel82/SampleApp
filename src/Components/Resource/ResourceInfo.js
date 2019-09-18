import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    borderColor: theme.palette.grey[500]
  },
  container: {
    width: '100%'
  }
});

const ResourceInfo = (props) => {
  const { classes, resource } = props;
  const { summary } = resource;
  return (
    <Box className={classes.root} border={2} p={1}>
      <Grid container>
        <Grid item xs={12}>
          <Typography component='body1'>{summary}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

ResourceInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResourceInfo);
