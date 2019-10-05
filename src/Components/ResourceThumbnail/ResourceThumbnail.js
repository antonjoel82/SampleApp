import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThumbnailTypes, ResourceTypes } from '../../server-constants.js';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import ImageIcon from '@material-ui/icons/Image';
import LinkIcon from '@material-ui/icons/Link';

const styles = makeStyles({
  root: {
    display: 'inline-block',
    cursor: 'pointer'
  },
  image: (props) => ({
    width: props.imgWidth || '100%',
    borderRadius: '2px'
  }),
  iconBox: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  }
});

const ResourceThumbnail = (props) => {
  const { thumbnailType, thumbnail, srcType, onClick } = props;
  const classes = styles(props);

  const getIconByType = () => {
    switch (srcType) {
      case ResourceTypes.Video:
        return PlayCircleOutlineIcon;
      case ResourceTypes.Link:
        return LinkIcon;
      case ResourceTypes.Image:
        return ImageIcon;
      case ResourceTypes.Document:
        return ChromeReaderModeIcon;
      case ResourceTypes.Text:
        return DescriptionIcon;
      default:
        return HelpOutlineIcon;
    };
  };

  const renderIcon = (icon) => {
    return (
      <Box className={classes.iconBox}>
        {getIconByType()}
      </Box>
    );
  };

  const renderImage = () => {
    if (thumbnail) {
      return (
        // <Image
        //   imageStyle={{ width: '264px', height: '137.64px' }}
        <img
          alt={`Represents resource`} // should this be customized based on resource summary? Title?
          className={classes.image}
          src={thumbnail}
        />
      )
    } else {
      return renderIcon();
    }
  };
  
  const renderThumbnail = () => {
    switch (thumbnailType) {
      case ThumbnailTypes.Link:
        return renderImage();
      case ThumbnailTypes.Icon:
        return renderIcon();
      case ThumbnailTypes.File:
      default:
        return renderIcon();
    }
  };
  
  return (
    <Box className={classes.root} onClick={onClick}>
      {renderThumbnail()}
    </Box>
  );
};

ResourceThumbnail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ResourceThumbnail;
