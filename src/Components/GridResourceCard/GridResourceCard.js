import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon
} from '@material-ui/icons';

import useStylesResourceCard from './ResourceCardStyles.js';
import { styleUtils } from '../../style-utils.js';
import CardMetadata from '../CardMetadata/CardMetadata.js';
import TagList from '../TagList/TagList.js';

const ResourceCard = ({ title, src, srcType, dateCreated }) => {
  const classes = useStylesResourceCard();
  const utilClasses = styleUtils();

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
      <Box className={utilClasses.respContainer}>
        <CardMedia
          className={utilClasses.respIframe}
          component='iframe'
          src={src}
          title={title /* update this with proper resource title */}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </Box>
      <CardContent className={classes.cardContent}>
        <CardMetadata />
        <Box className={classes.cardTextArea}>
          <Typography className={classes.cardTitle} noWrap>{title}</Typography>
        </Box>
        <TagList tags={['Forehand', 'Throwing', 'Distance', 'Technique', 'Rowan', 'Wrap']} />
      </CardContent>
    </Card>
  );
};
export default ResourceCard;
