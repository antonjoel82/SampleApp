import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextEntry from '../TextEntry/TextEntry';

import { MAX_TAG_LABEL_LENGTH, MAX_SUMMARY_LENGTH } from '../../server-constants.js';

import IconSwitcher from '../IconSwitcher/IconSwitcher';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

const styles = (theme) => ({
  root: {
    flexGrow: 1
    // width: '100%'
  }
});

const AddTagForm = (props) => {
  const { classes, setLabel, setSummary, validateLabel, labelIsValid } = props;

  const handleInputChange = (updateFn, validator) => (event) => {
    const val = event.target.value;

    validator && validator(val);
    updateFn(val);
  };

  return (

    <div className={classes.root}>
      <form autoComplete='off'>
        <Grid item container spacing={2} justify='center'>
          <Grid item container direction='row' alignContent='center' alignItems='center'>
            <TextEntry
              name='label'
              label='Label'
              onChange={handleInputChange(setLabel, validateLabel)}
              required
              autoFocus
              // xs={10}
              InputProps={{
                endAdornment: (
                  <IconSwitcher
                    status={labelIsValid}
                    TrueIcon={CheckCircleIcon}
                    FalseIcon={ErrorIcon}
                  />
                ),
                maxLength: MAX_TAG_LABEL_LENGTH
              }}
            />
            {/* <Grid item xs justify='center' alignContent='center' >
              <IconSwitcher
                status={labelIsValid}
                TrueIcon={CheckCircleIcon}
                FalseIcon={ErrorIcon}
              />
            </Grid> */}
          </Grid>
          <TextEntry
            name='summary'
            label='Summary'
            onChange={handleInputChange(setSummary)}
            inputProps={{ maxLength: MAX_SUMMARY_LENGTH }}
            required
          />
        </Grid>
      </form>
    </div>
  );
};

AddTagForm.propTypes = {
  classes: PropTypes.object.isRequired,
  setLabel: PropTypes.func.isRequired,
  setSummary: PropTypes.func.isRequired,
  validateLabel: PropTypes.func.isRequired,
  labelIsValid: PropTypes.bool.isRequired
};

export default withStyles(styles)(AddTagForm);
