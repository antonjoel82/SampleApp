import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import useStylesResourceCard from './ResourceCardStyles.js';
import '../../utils.css';

const ResourceCard = ({ title, src, srcType, dateCreated }) => {
  const classes = useStylesResourceCard();

  return (
    <Card className={classes.card}>
      <CardHeader
        // className={classes.header}
        title={title}
        titleTypographyProps={{ variant: 'h6' }}
        subheader={dateCreated}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Box className='resp-container'>
        <CardMedia
          className='resp-iframe'
          component='iframe'
          src={src}
          title={title /* update this with proper resource title */}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen='true'
        />
      </Box>
      <CardContent>
        <Typography variant='body' component='p'>
          This is the basic summary of the resource.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label='Add to favorites'>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default ResourceCard;
