import React from 'react';
import { Typography, Container, CssBaseline, Grid, Button, Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import TextEntry from '../TextEntry/TextEntry';

import { MAX_TITLE_LENGTH, MAX_SUMMARY_LENGTH, MAX_DESCRIPTION_LENGTH } from '../../server-constants.js';
import TagInput from '../TagInput/TagInput';
import VideoTimestampInput from '../VideoTimestampInput/VideoTimestampInput';
import { showDialog, hideDialog } from '../../Actions/DialogAction';
import { DialogTypes } from '../Dialog/dialog-constants';

const useStyles = theme => ({
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Upload extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      resourceType: 'video',
      link: '',
      title: '',
      summary: '',
      description: '',
      tagDialogOpen: false,
      tags: []
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectTypeChange = this.handleSelectTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowDialog = this.handleShowDialog.bind(this);
  }

  validateForm = () => {
    const { title, summary } = this.state;
    if (!(title && summary)) {
      return { valid: false, msg: 'Title and Summary are required!' };
    }
    return { valid: true };
  }

  handleSubmit = (event) => {
    const validation = this.validateRegister();

    if (!validation.valid) {
      window.alert(validation.msg);
      // return;
    }

    // const registerData = JSON.stringify(this.prepareRegisterInfo());
    // const component = this;

    // fetch(`${ENDPOINT}/register`, {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: registerData
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.debug(JSON.stringify(response));
    //     if (!response.success) {
    //       throw new Error(response.reason);
    //     }
    //     window.alert('Succesfully registered! Please proceed to sign in.');
    //     component.props.push('/signin');
    //   })
    //   .catch(err => {
    //     console.error('Error! Could not register user.', err);
    //     window.alert(`${err ? err + '! ' : ''}Unable to register user. Please try again.`);
    //   });
  }

  handleInputChange = (event) => {
    this.setState(Object.assign({}, { [event.target.name]: event.target.value }));
  }

  handleSelectTypeChange = (event) => {
    this.setState(Object.assign({}, { resourceType: event.target.value }));
  }

  handleShowDialog = (event) => {
    this.props.showDialog({
      // title: 'Confirm Confirmation',
      // message: 'This is a confirm dialog. It doesn\'t really do anything except offer a confirmation. And show you a stupidly long string just to see how the sizing works.'
    }, DialogTypes.addTag);
  }

  render () {
    const { classes } = this.props;
    const { resourceType } = this.state;

    return (
      <>
        <Container component='main' maxWidth='sm'>
          <CssBaseline />
          <div className={classes.paper}>
            <Grid container spacing={1} justify='center' alignContent='center' alignItems='center'>
              <Grid item>
                <Typography component='h1' variant='h5'>Add A New</Typography>
              </Grid>
              <Grid item>
                <Select
                  onChange={this.handleSelectTypeChange}
                  value={resourceType}
                  // autoWidth
                >
                  <MenuItem value='video'>
                    <Typography component='h1' variant='h5'>Video</Typography>
                  </MenuItem>
                  <MenuItem value='image'>
                    <Typography component='h1' variant='h5'>Image</Typography>
                  </MenuItem>
                  <MenuItem value='link'>
                    <Typography component='h1' variant='h5'>Link</Typography>
                  </MenuItem>
                  <MenuItem value='text'>
                    <Typography component='h1' variant='h5'>Text</Typography>
                  </MenuItem>
                </Select>
              </Grid>
            </Grid>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <TextEntry
                  name='title'
                  label='Title'
                  onChange={this.handleInputChange}
                  inputProps={{ maxLength: MAX_TITLE_LENGTH }}
                  required
                  autoFocus
                />
                <TextEntry
                  name='link'
                  label='Link'
                  onChange={this.handleInputChange}
                  required
                  autoFocus
                />
                {
                  resourceType === 'video' &&
                  (
                    <Grid item>
                      <VideoTimestampInput />
                    </Grid>
                  )
                }
                <TextEntry
                  name='summary'
                  label='Summary'
                  onChange={this.handleInputChange}
                  inputProps={{ maxLength: MAX_SUMMARY_LENGTH }}
                  multiline
                  required
                />
                <TextEntry
                  name='description'
                  label='Description'
                  rows={5}
                  onChange={this.handleInputChange}
                  inputProps={{ maxLength: MAX_DESCRIPTION_LENGTH }}
                  multiline
                />
                <Grid item xs={12}>
                  <TagInput
                    helperText={
                      <Typography
                        variant='subtitle2'
                        onClick={this.handleShowDialog}
                        style={{ cursor: 'pointer' }}
                      >
                        Don't see the Tag you want? Add a new one!
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type='button'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={this.handleSubmit}
              >
                Submit!
              </Button>
            </form>
          </div>
        </Container>
      </>
    );
  }
}

Upload.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDialog: (dialogProps, dialogType) => dispatch(showDialog({ dialogProps, dialogType })),
    hideDialog: () => dispatch(hideDialog()),
    push
  };
};

// const mapStateToProps = state => ({
//   ...state.dialog
// });

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(Upload));
