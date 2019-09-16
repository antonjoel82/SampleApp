import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

import { ENDPOINT } from '../../constants';

import fetch from 'isomorphic-fetch';
import promise from 'es6-promise';

import TextEntry from '../TextEntry/TextEntry.js';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
// import { MAX_USERNAME_LENGTH } from '../../server-constants.js';

promise.polyfill();

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <NavLink to='/'>
        UltiDB
      </NavLink>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    };

    this.validateRegister = this.validateRegister.bind(this);
    this.prepareRegisterInfo = this.prepareRegisterInfo.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateRegister = () => {
    const { firstName, lastName, email, username, password } = this.state;
    if (!(firstName && lastName && email && username && password)) {
      return { valid: false, msg: 'All fields must be filled in!' };
    }
    return { valid: true };
  }

  prepareRegisterInfo = () => {
    const { firstName, lastName, email, username, password } = this.state;
    return { name: { first: firstName, last: lastName }, email, username, password };
  }

  handleRegister = (event) => {
    const validation = this.validateRegister();

    if (!validation.valid) {
      window.alert(validation.msg);
      return;
    }

    const registerData = JSON.stringify(this.prepareRegisterInfo());
    const component = this;

    fetch(`${ENDPOINT}/register`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: registerData
    })
      .then(response => response.json())
      .then(response => {
        console.debug(JSON.stringify(response));
        if (!response.success) {
          throw new Error(response.reason);
        }
        window.alert('Succesfully registered! Please proceed to sign in.');
        component.props.push('/signin');
      })
      .catch(err => {
        console.error('Error! Could not register user.', err);
        window.alert(`${err ? err + '! ' : ''}Unable to register user. Please try again.`);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render () {
    const { classes } = this.props;

    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Register
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <TextEntry
                name='firstName'
                label='First Name'
                autoComplete='fname'
                onChange={this.handleChange}
                smOverride={6}
                required
                autoFocus
              />
              <TextEntry
                name='lastName'
                label='Last Name'
                autoComplete='lname'
                onChange={this.handleChange}
                smOverride={6}
                required
              />
              <TextEntry
                name='userame'
                label='Username'
                autoComplete='username'
                onChange={this.handleChange}
                required
              />
              <TextEntry
                name='email'
                label='Email Address'
                autoComplete='email'
                onChange={this.handleChange}
                required
              />
              <TextEntry
                name='password'
                label='Password'
                type='password'
                autoComplete='current-password'
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Button
              type='button'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={this.handleRegister}
            >
              Register
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Typography variant='body2'>
                  <NavLink to='/signin'>Already have an account? Sign in</NavLink>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, { push })(withStyles(styles)(Register));
