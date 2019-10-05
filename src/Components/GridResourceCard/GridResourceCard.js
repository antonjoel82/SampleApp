import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon
} from '@material-ui/icons';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import useStylesResourceCard from './ResourceCardStyles.js';
import CardMetadata from '../CardMetadata/CardMetadata.js';
import TagList from '../TagList/TagList.js';
import ResourceThumbnail from '../ResourceThumbnail/ResourceThumbnail.js';

const GridResourceCard = (props) => {
  const { title, srcType, publicKey, thumbnail, thumbnailType } = props.resource;
  const classes = useStylesResourceCard();

  const tags = {
    forehand: { key: 'forehand', label: 'Forehand' },
    throwing: { key: 'throwing', label: 'Throwing' },
    distance: { key: 'distance', label: 'Distance' },
    technique: { key: 'technique', label: 'Technique' },
    rowan: { key: 'rowan', label: 'Rowan' },
    wrap: { key: 'wrap', label: 'Wrap' }
  };

  const navToResource = (event) => {
    props.push(`/r/${publicKey}`);
  };

  return (
    <Card className={classes.card}>
      <CardActions>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
      {/* <Box className={utilClasses.respContainer}> */}
        {/* <CardMedia
          className={utilClasses.respIframe}
          component='iframe'
          src={src}
          title={title}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        /> */}
        <ResourceThumbnail
          thumbnailType={thumbnailType}
          thumbnail={thumbnail}
          srcType={srcType}
          onClick={navToResource}
        />
      {/* </Box> */}
      <CardContent className={classes.cardContent}>
        <CardMetadata />
        <Box className={classes.cardTextArea}>
          <NavLink to={`/r/${publicKey}`} className={classes.cardTitle}>
            <Typography className={classes.cardTitle} noWrap>{title}</Typography>
          </NavLink>
        </Box>
        <TagList tags={tags} />
      </CardContent>
    </Card>
  );
};
export default connect(null, { push })(GridResourceCard);
