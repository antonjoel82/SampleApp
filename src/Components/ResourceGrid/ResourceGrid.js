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
              return (
                <Grid key={res.id} item xs>
                  <GridResourceCard
                    key={res.id}
                    title={res.title}
                    src={res.src}
                    srcType={res.srcType}
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
