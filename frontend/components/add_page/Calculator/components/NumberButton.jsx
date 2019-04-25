import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const NumberButton = ({ tag, classes, addDispatch }) => {
  const handleNumber = number => () => {
    addDispatch({
      type: 'CALCULATOR_NUMBER',
      payload: number
    });
  };

  return (
    <Button onClick={handleNumber(tag)} variant="contained" color="primary" className={classes.numberButton}>
      <Typography className={classes.blockContent} variant="h5">
        {tag}
      </Typography>
    </Button>
  );
};

export default NumberButton;
