import { makeStyles } from '@material-ui/core/styles';

export const styleUtils = makeStyles(theme => ({
  respContainer: {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.25%',
    backgroundColor: 'gray'
  },
  respIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0
  }
}));
