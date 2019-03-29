import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const SubtractButton = ({ dispatch, classes }) => {
  const handleSubtract = () => {
    dispatch({ type: 'SUBTRACT' });
  };

  return (
    <Button onClick={handleSubtract} variant="contained" color="primary" className={classes.numberButton}>
      <Typography className={classes.blockContent} variant="h4">
        {'-'}
      </Typography>
    </Button>
  );
};

export default SubtractButton;
