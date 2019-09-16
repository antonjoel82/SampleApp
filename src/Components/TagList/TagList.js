import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Tag from '../Tag/Tag';

const useStyles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }
});

class TagList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tags: props.tags,
      deletable: props.deletable
    };

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete (keyToDelete) {
    return () => {
      const { tags } = this.state;
      delete tags[keyToDelete];
      this.setState(Object.assign({}, { tags: tags }));
    };
  }

  render () {
    const { classes } = this.props;
    const { tags, deletable } = this.state;

    return (
      <Box className={classes.wrapper}>
        {Object.values(tags).map(({ key, label }) => {
          return (<Tag key={key} label={label} onDelete={deletable ? this.onDelete(key) : undefined} />);
        })}
      </Box>
    );
  }
}
export default withStyles(useStyles)(TagList);
