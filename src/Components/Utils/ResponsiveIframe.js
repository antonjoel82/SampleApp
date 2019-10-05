import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  myFrame: {
    width: '100%',
    height: '100%'
  }
});

const ResponsiveIframe = (props) => {
  const { classes } = props;
  return (
    <iframe title={props.title} className={classes.myFrame} {...props} />
  );
};

ResponsiveIframe.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(ResponsiveIframe);
