import React from 'react';
import { Grid, Checkbox, FormControlLabel } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import TextEntry from '../TextEntry/TextEntry';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

class VideoTimestampInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tsEnabled: false,
      tsMin: 0,
      tsSec: 0
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleCheckbox = (event) => {
    this.setState(Object.assign({}, { tsEnabled: event.target.checked }));
  }

  handleInputChange = (event) => {
    this.setState(Object.assign({}, { [event.target.name]: event.target.value }));
  }

  render () {
    const { classes } = this.props;
    const { tsEnabled, tsMin, tsSec } = this.state;

    return (
      <Grid container className={classes.root} alignItems='center' alignContent='center'>
        <Grid item>
          <FormControlLabel
            label='Timestamp for Video?'
            control={
              <Checkbox
                checked={tsEnabled}
                onChange={this.handleCheckbox}
              />
            }
          />
        </Grid>
        <Grid container item spacing={1} xs>
          <TextEntry
            name='tsMin'
            value={tsMin}
            label='Minutes'
            onChange={this.handleInputChange}
            inputProps={{ type: 'number', min: '0', max: '999' }}
            required={tsEnabled}
            disabled={!tsEnabled}
            smOverride={6}
          />
          <TextEntry
            name='tsSec'
            value={tsSec}
            label='Seconds'
            onChange={this.handleInputChange}
            inputProps={{ type: 'number', min: '0', max: '59' }}
            required={tsEnabled}
            disabled={!tsEnabled}
            smOverride={6}
          />
        </Grid>
      </Grid>
    );
  }
}
export default connect(null, { push })(withStyles(useStyles)(VideoTimestampInput));
