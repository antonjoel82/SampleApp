import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import NavMenu from '../NavMenu/NavMenu.js';

import { withStyles, makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
  Search as SearchIcon
} from '@material-ui/icons';
import NavButtonBar from '../NavButtonBar/NavButtonBar.js';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3)
      // width: 'auto'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(3)
      // width: 'auto'
    },
    display: 'flex',
    flexDirection: 'row'
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

function ElevationScroll (props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node.isRequired
};

const ENTER_KEY_CODE = 13;

function StickyBar (props) {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchSubmit = () => {
    props.push(`/search?${searchQuery}`);
  };

  const handleKeyPress = (event) => {
    if (event.charCode === ENTER_KEY_CODE) {
      handleSearchSubmit();
    }
  }

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <NavMenu />
            <Typography variant='h6'>UltiDB</Typography>
            <div className={classes.search}>
              <InputBase
                placeholder='Search…'
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyPress={handleKeyPress}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
              <div className={classes.searchIcon}>
                <IconButton onClick={handleSearchSubmit} color='inherit'>
                  <SearchIcon />
                </IconButton>
              </div>
            </div>
            <NavButtonBar />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

export default connect(null, { push })(withStyles(useStyles)(StickyBar));
