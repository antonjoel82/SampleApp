import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Box, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchGrid from './SearchGrid';
import FilterSidePanel from '../FilterSidePanel/FilterSidePanel';
import { SourceType } from '../../constants.js';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const styles = (theme) => ({
  root: {
    display: 'flex'
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
});

const resources = [
  {
    id: 'sadas3r5234',
    publicKey: 'PX234Yc',
    title: 'Ian Sweeney for Callahan 2019',
    summary: 'SLOCORE nominates Ian Sweeney for the 2019 USAU College Callahan award',
    uploadDate: 'September 16, 2019',
    srcName: 'YouTube',
    thumbnailType: 'link',
    thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg',
    link: 'https://www.youtube.com/embed/xlwL_vSsIPI',
    srcType: SourceType.VIDEO
  },
  {
    id: 'sadas3r5234',
    publicKey: 'PX234Yc',
    title: 'Ian Sweeney for Callahan 2019 - Here\'s a Super Long Title to See What It Looks Like',
    summary: 'SLOCORE nominates Ian Sweeney for the 2019 USAU College Callahan award',
    uploadDate: 'September 16, 2019',
    srcName: 'YouTube',
    thumbnailType: 'link',
    thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg',
    link: 'https://www.youtube.com/embed/xlwL_vSsIPI',
    srcType: SourceType.VIDEO
  },
  {
    id: 'sadas3r5234',
    publicKey: 'PX234Yc',
    title: 'Ian Sweeney for Callahan 2019',
    summary: 'SLOCORE nominates Ian Sweeney for the 2019 USAU College Callahan award',
    uploadDate: 'September 16, 2019',
    srcName: 'YouTube',
    thumbnailType: 'link',
    thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg',
    link: 'https://www.youtube.com/embed/xlwL_vSsIPI',
    srcType: SourceType.VIDEO
  },
  {
    id: 'sadas3r5234',
    publicKey: 'PX234Yc',
    title: 'Ian Sweeney for Callahan 2019',
    summary: 'SLOCORE nominates Ian Sweeney for the 2019 USAU College Callahan award',
    uploadDate: 'September 16, 2019',
    srcName: 'YouTube',
    thumbnailType: 'link',
    thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg',
    link: 'https://www.youtube.com/embed/xlwL_vSsIPI',
    srcType: SourceType.VIDEO
  },
  {
    id: 'sadas3r5234',
    publicKey: 'PX234Yc',
    title: 'Ian Sweeney for Callahan 2019',
    summary: 'SLOCORE nominates Ian Sweeney for the 2019 USAU College Callahan award',
    uploadDate: 'September 16, 2019',
    srcName: 'YouTube',
    thumbnailType: 'link',
    thumbnail: 'https://img.youtube.com/vi/xlwL_vSsIPI/mqdefault.jpg',
    link: 'https://www.youtube.com/embed/xlwL_vSsIPI',
    srcType: SourceType.VIDEO
  }
];

const SearchPage = (props) => {
  const { classes } = props;
  return (
    <Box className={classes.root} py={5} mr={8}>
      <Grid container spacing={2} direction='row'>
        <Grid item xs={3}>
          <FilterSidePanel />
        </Grid>
        <Grid item xs>
          <Typography variant='h6'>Search results:</Typography>
          <Divider variant='fullWidth' className={classes.divider} />
          <SearchGrid resources={resources} />
        </Grid>
      </Grid>
    </Box>
  );
};

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, { push })(withStyles(styles)(SearchPage));
