import React from 'react';
import Box from '@material-ui/core/Box';
import ResourceCard from '../ResourceCard/ResourceCard';

import './ResourceGrid.css';

class ResourceGrid extends React.Component {
  render () {
    return (
      <Box className='res-grid' m={2}>
        {
          this.props.resources.map((res, i) => {
            return (
              <ResourceCard
                title={res.title}
                src={res.src}
                srcType={res.srcType}
              />
            // <VideoFrame
            // 	src={res.src}
            // 	width={res.width}
            // 	height={res.height}
            // />
            );
          })
        }
      </Box>
    );
  }
}
export default ResourceGrid;
