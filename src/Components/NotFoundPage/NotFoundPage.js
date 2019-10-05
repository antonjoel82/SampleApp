import React from 'react';
import PropTypes from 'prop-types';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(20),
    margin: 'auto',
    textAlign: 'center'
  }
});

const NotFoundPage = (props) => {
  const { classes, message } = props;
  return (
    <Container component='main'>
      <CssBaseline />
      <div className={classes.root}>
        <Typography variant='h4'>
          {message}
        </Typography>
      </div>
    </Container>
  );
};

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFoundPage);
