import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { connect } from 'react-redux';
// import { push } from 'connected-react-router';

import ChipInput from 'material-ui-chip-input';
import { Box } from '@material-ui/core';

// const tags = {
//   forehand: { key: 'forehand', label: 'Forehand' },
//   throwing: { key: 'throwing', label: 'Throwing' },
//   distance: { key: 'distance', label: 'Distance' },
//   technique: { key: 'technique', label: 'Technique' },
//   rowan: { key: 'rowan', label: 'Rowan' },
//   wrap: { key: 'wrap', label: 'Wrap' }
// };

const tags = ['Forehand', 'Backhand', 'Throwing', 'Zone', 'Backing'];

const styles = (theme) => ({
  root: {
    width: 'auto',
    borderWidth: '1px',
    borderRadius: '2px',
    borderColor: theme.palette.grey[500]
  }
});

class TagInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tags: []
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd (tag) {
    const { tags } = this.state;
    tags.push(tag);
    this.setState(Object.assign({}, { tags: tags }));
  }

  handleDelete (tag, index) {
    const { tags } = this.state;
    tags.splice(index, 1);
    this.setState(Object.assign({}, { tags: tags }));
  }

  render () {
    const { classes } = this.props;

    return (
      <Box marginBottom={2}>
        <ChipInput
          {...this.props}
          required
          className={classes.root}
          InputProps={{ className: classes.root }}
          value={this.state.tags}
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
          dataSource={tags}
          label='Tags'
          placeholder='Begin typing a keyword to add a Tag...'
          fullWidth
          // dataSourceConfig={{ text: 'key', value: 'label' }}
        />
      </Box>
    );
  }
}
// export default connect(null, { push })(withStyles(styles)(TagInput));
export default (withStyles(styles)(TagInput));
