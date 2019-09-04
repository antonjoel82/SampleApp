import { makeStyles } from '@material-ui/core/styles';

const useStylesResourceCard = makeStyles(theme => ({
  card: {
    maxWidth: 700,
    minWidth: 325,
    textAlign: 'left',
    '&:hover': {
      boxShadow: '0 0.5rem 1rem 0 rgba(84, 84, 84, 0.6)'
    }
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
