import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const styles = (theme) => ({
  root: {
    display: 'flex'
  }
});

class SearchResourceCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      resource: props.resource || {}
    };
  }

  render () {
    const { classes } = this.props;

    return (
      <Box className={classes.root}>
        <Typography>Default Text</Typography>
      </Box>
    );
  }
}
export default connect(null, { push })(withStyles(styles)(SearchResourceCard));
