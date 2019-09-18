import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%'
  }
});

const ResourceTitleBar = (props) => {
  const { classes, title, uploadDate, source } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Typography variant='h5'>{title}</Typography>
        </Grid>
        <Grid item container direction='row' spacing={2}>
          <Grid item>
            <Typography variant='subtitle2'>{uploadDate}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='subtitle2'>{source}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

ResourceTitleBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResourceTitleBar);
