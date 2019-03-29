import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CheckButton = ({ equal, dispatch, classes }) => {
  const handleEqual = () => {
    dispatch({ type: 'EQUAL' });
  };

  return (
    <Button onClick={equal ? handleEqual : null} variant="contained" color="secondary" className={classes.numberButton}>
      <Typography className={classes.blockContent} variant={equal ? 'h4' : 'h5'}>
        {equal ? '=' : 'OK'}
      </Typography>
    </Button>
  );
};

export default CheckButton;
