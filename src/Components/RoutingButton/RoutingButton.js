import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

class RoutingButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    this.props.push(this.props.route || '/');
  }

  render () {
    const { icon } = this.props;

    return (
      <IconButton color='inherit' onClick={this.handleClick}>
        {React.createElement(icon, { fontSize: 'default' })}
      </IconButton>
    );
  }
}
export default connect(null, { push })(withStyles(useStyles)(RoutingButton));
