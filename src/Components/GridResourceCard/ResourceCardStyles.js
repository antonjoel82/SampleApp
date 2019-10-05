import { makeStyles } from '@material-ui/core/styles';
import { GRID_CARD_WIDTH } from '../../constants.js';

const useStylesResourceCard = makeStyles(theme => ({
  card: {
    // minWidth: '275px',
    // maxWidth: '275px',
    width: GRID_CARD_WIDTH,
    textAlign: 'left',
    '&:hover': {
      boxShadow: '0 0.5rem 1rem 0 rgba(84, 84, 84, 0.6)'
    }
  },
  cardTitle: {
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: 'none',
    color: theme.palette.common.black
  },
  cardContent: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.5)
  },
  cardTextArea: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.5)
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));
export default useStylesResourceCard;
