import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const SubtractButton = ({ addDispatch, classes }) => {
  const handleSubtract = () => {
    addDispatch({ type: 'CALCULATOR_SUBTRACT' });
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
