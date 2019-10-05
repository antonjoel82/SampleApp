import React from 'react';
import Box from '@material-ui/core/Box';
import GridResourceCard from '../GridResourceCard/GridResourceCard.js';

import { Grid } from '@material-ui/core';

const ResourceGrid = ({ resources }) => {
    const resArr = resources || [];

    return (
      <Box px={10} py={3}>
        <Grid container spacing={2}>
          {
            resArr.map((resource, i) => {
              return (
                <Grid key={i /*resource.id*/} item>
                  <GridResourceCard key={i /*resource.id*/} resource={resource}/>
                </Grid>
              );
            })
          }
        </Grid>
      </Box>
    );
};
export default ResourceGrid;
