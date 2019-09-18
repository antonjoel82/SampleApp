import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  outerWrapper: props => ({
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: props.ratio ? `${(1 / props.ratio) * 100}%` : '56.25%',
    overflow: 'hidden',
    backgroundColor: 'white'
  }),
  innerWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});

const AspectRatio = (props) => {
  const { children } = props;
  const classes = styles(props);

  return (
    <div className={classes.outerWrapper}>
      <div className={classes.innerWrapper}>
        {children}
      </div>
    </div>
  );
};

AspectRatio.propTypes = {
  classes: PropTypes.object.isRequired,
  ratio: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default AspectRatio;
