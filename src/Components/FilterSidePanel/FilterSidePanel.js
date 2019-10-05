import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Box, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TagList from '../TagList/TagList';

const styles = (theme) => ({
  filterPanel: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
});

const tags = {
  forehand: { key: 'forehand', label: 'Forehand' },
  throwing: { key: 'throwing', label: 'Throwing' },
  distance: { key: 'distance', label: 'Distance' },
  technique: { key: 'technique', label: 'Technique' },
  rowan: { key: 'rowan', label: 'Rowan' },
  wrap: { key: 'wrap', label: 'Wrap' }
};

const FilterSidePanel = (props) => {
  const { classes } = props;
  return (
    <Box className={classes.filterPanel} mx={2}>
      <Paper className={classes.paper}>
        <Typography variant='h6'>Filters</Typography>
        <br />
        <Typography variant='body1'>Filter Name</Typography>
        <TagList tags={tags} />
        <Divider className={classes.divider} />
        <Typography variant='body1'>Filter Name</Typography>
        <TagList tags={tags} />
        <Divider className={classes.divider} />
        <Typography variant='body1'>Filter Name</Typography>
        <TagList tags={tags} />
        <Divider className={classes.divider} />
      </Paper>
    </Box>
  );
};

FilterSidePanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterSidePanel);
