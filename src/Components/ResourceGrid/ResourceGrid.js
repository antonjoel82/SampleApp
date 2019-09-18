import React from 'react';
import Box from '@material-ui/core/Box';
import GridResourceCard from '../GridResourceCard/GridResourceCard.js';

import { Grid } from '@material-ui/core';

class ResourceGrid extends React.Component {
  render () {
    return (
      // <Box className='res-grid' >
      <Box px={10} py={3}>
        <Grid container spacing={3}>
          {
            this.props.resources.map((res, i) => {
              const { id, publicKey, title, src, srcType } = res;
              return (
                <Grid key={id} item xs>
                  <GridResourceCard
                    key={id}
                    title={title}
                    src={src}
                    srcType={srcType}
                    publicKey={publicKey}
                  />
                </Grid>
              );
            })
          }
        </Grid>
      </Box>
    );
  }
}
export default ResourceGrid;
