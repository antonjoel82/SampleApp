import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Typography, Paper, Menu, MenuItem, Grid, ListItemIcon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  MoreVert as MoreVertIcon
} from '@material-ui/icons';
import { THUMBNAIL_WIDTH } from '../../constants.js';
import CardMetadata from '../CardMetadata/CardMetadata.js';
import TagList from '../TagList/TagList.js';
import ResourceThumbnail from '../ResourceThumbnail/ResourceThumbnail.js';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const styles = (theme) => ({
  root: {
    // flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto'
  },
  cardTitle: {
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: 'none',
    color: theme.palette.common.black
  },
  clickable: {
    cursor: 'pointer'
  }
});

const options = [
  { label: 'Favorite', icon: <FavoriteIcon /> },
  { label: 'Share', icon: <ShareIcon /> }
];

const SearchResourceCard = (props) => {
  const { classes, resource } = props;
  const { title, summary, srcType, publicKey, thumbnail, thumbnailType } = resource;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navToResource = (event) => {
    props.push(`/r/${publicKey}`);
  };

  const tags = {
    forehand: { key: 'forehand', label: 'Forehand' },
    throwing: { key: 'throwing', label: 'Throwing' },
    distance: { key: 'distance', label: 'Distance' },
    technique: { key: 'technique', label: 'Technique' },
    rowan: { key: 'rowan', label: 'Rowan' },
    wrap: { key: 'wrap', label: 'Wrap' }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ResourceThumbnail 
              thumbnailType={thumbnailType}
              thumbnail={thumbnail}
              imgWidth={THUMBNAIL_WIDTH}
              srcType={srcType}
              onClick={navToResource}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Box className={classes.clickable} onClick={navToResource}>
                  <Typography className={classes.cardTitle}>{title}</Typography>
                  <CardMetadata />
                  <br />
                  <Typography variant='body2'>{summary}</Typography>
                </Box>
              </Grid>
              <Grid item>
                <TagList tags={tags} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              // PaperProps={{
              //   style: {
              //     maxHeight: ITEM_HEIGHT * 4.5,
              //     width: 200,
              //   },
              // }}
            >
              {options.map(({label, icon}) => (
                <MenuItem key={label}  onClick={handleClose}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <Typography variant='inherit' noWrap>{label}</Typography>
                </MenuItem>
              ))}
            </Menu>       
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
  
  // return (
  //   <Card className={classes.root}>
  //     <ResourceThumbnail thumbnailType={thumbnailType} thumbnail={thumbnail} srcType={srcType} />
  //     <CardContent className={classes.cardContent}>
  //       <Box className={classes.cardTextArea}>
  //         <NavLink to={`/${publicKey}`} className={classes.cardTitle}>
  //           <Typography className={classes.cardTitle} >{title}</Typography>
  //         </NavLink>
  //       </Box>
  //       <CardMetadata />
  //       <TagList tags={tags} />
  //     </CardContent>
  //     <CardActions>
  //         <IconButton aria-label='add to favorites'>
  //           <FavoriteIcon />
  //         </IconButton>
  //         <IconButton aria-label='share'>
  //           <ShareIcon />
  //         </IconButton>
  //       </CardActions>
  //   </Card>
  // );
};

SearchResourceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, { push })(withStyles(styles)(SearchResourceCard));
