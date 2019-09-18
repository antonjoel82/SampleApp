import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { SourceType } from '../../constants.js';
import ResponsiveIframe from '../Utils/ResponsiveIframe.js';
import AspectRatio from '../Utils/AspectRatio.js';

const styles = (theme) => ({
  root: {
    display: 'flex'
  }
});

const ResourceMedia = (props) => {
  const { classes, srcType, src } = props;

  const renderVideo = () => {
    return (
      <AspectRatio ratio={16 / 9}>
        <ResponsiveIframe
          src={src}
          scrolling='no'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </AspectRatio>
    );
  };

  const renderImage = () => {
    return (<></>);
  };

  const renderDoc = () => {
    return (<></>);
  };

  const renderOther = () => {
    return (<></>);
  };

  const renderMedia = () => {
    switch (srcType) {
      case SourceType.VIDEO:
        return renderVideo();
      case SourceType.IMAGE:
        return renderImage();
      case SourceType.DOCUMENT:
        return renderDoc();
      default:
        return renderOther();
    }
  };

  return (
    // <div className={classes.root}>
    renderMedia()
    // </div>
  );
};

ResourceMedia.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResourceMedia);
