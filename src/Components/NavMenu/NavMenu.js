import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const NavMenu = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function openMenu (event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClick (event) {
    props.push(`/${event.target.id}`);
    handleClose();
  }

  function handleClose () {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='Open drawer'
        aria-haspopup='true'
        onClick={openMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='my-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem id='' onClick={handleClick}>Home</MenuItem>
        <MenuItem id='register' onClick={handleClick}>Register</MenuItem>
        <MenuItem id='signin' onClick={handleClick}>Sign In</MenuItem>
      </Menu>
    </>
  );
};
export default connect(null, { push })(NavMenu);
