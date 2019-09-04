import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStylesSignIn from './SignInStyles.js';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';

import { requestSignIn } from '../../Actions/SignInAction.js';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const styles = useStylesSignIn;

class SignIn extends React.Component {
  render () {
    const { classes, onSignIn } = this.props;

    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <fieldset className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={onSignIn}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to='#' variant='body2'>
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to='/register' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </fieldset>
        </div>
      </Container>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.signIn.user,
    signedIn: state.signIn.signedIn,
    location: state.router.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (event) => dispatch(requestSignIn(event.target.value, event.target.value)),
    push
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn));
