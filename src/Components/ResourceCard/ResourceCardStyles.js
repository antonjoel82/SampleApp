import { makeStyles } from '@material-ui/core/styles';

const useStylesResourceCard = makeStyles(theme => ({
	card: {
		maxWidth: 700,
		minWidth: 325
	},
	header: {
		maxWidth: 200
	}
}));
export default useStylesResourceCard;