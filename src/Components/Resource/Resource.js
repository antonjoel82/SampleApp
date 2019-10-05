import React from 'react';
import PropTypes from 'prop-types';
import { Container, CssBaseline, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import ResourceMedia from './ResourceMedia';
import { SourceType } from '../../constants';
import ResourceInfo from './ResourceInfo';
import ResourceTitleBar from './ResourceTitleBar';

const styles = (theme) => {
  return {
    root: {
      paddingTop: theme.spacing(4),
      // paddingRight: theme.spacing(6),
      // paddingLeft: theme.spacing(6)
    }
  };
};

class Resource extends React.Component {
  constructor (props) {
    super(props);
    this.resourceKey = props.match.params.resourceKey;
    this.state = {
      resource: {}
    };

    this.fetchResource = this.fetchResource.bind(this);
  }

  fetchResource () {
    this.setState(Object.assign({}, {
      resource: {
        id: 'sadas3r5234',
        publicKey: 'PX234Yc',
        title: 'Ian Sweeney for Callahan 2019',
        summary: 'SLOCORE nominates Ian Sweeney for the 2019 USAU College Callahan award',
        uploadDate: 'September 16, 2019',
        srcName: 'YouTube',
        link: 'https://www.youtube.com/embed/xlwL_vSsIPI',
        srcType: SourceType.VIDEO
      }
    }));
  }

  componentDidMount () {
    this.fetchResource();
  }

  render () {
    const { classes } = this.props;
    const { link, srcType, title, uploadDate, srcName, publicKey } = this.state.resource;

    return (
      <Box px={6}>
        <Container component='main' className={classes.root} maxWidth='xl'>
          <CssBaseline />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <ResourceTitleBar title={title} uploadDate={uploadDate} source={srcName} />
            </Grid>
            <Grid item xs={12}>
              <ResourceMedia srcType={srcType} src={link} title={`media-${publicKey}`}/>
            </Grid>
            <Grid item xs={12}>
              <ResourceInfo resource={this.state.resource} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}

Resource.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, { push })(withStyles(styles)(Resource));
