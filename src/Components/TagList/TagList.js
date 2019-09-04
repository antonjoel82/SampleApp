import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tag from '../Tag/Tag';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }
}));

const TagList = ({ tags }) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      {tags.map((tag, i) => {
        return (<Tag key={i} tag={tag} />);
      })}
    </Box>
  );
};
export default TagList;
