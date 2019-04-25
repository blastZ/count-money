import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AddButton = ({ addDispatch, classes }) => {
  const handleAdd = () => {
    addDispatch({ type: 'CALCULATOR_ADD' });
  };

  return (
    <Button onClick={handleAdd} variant="contained" color="primary" className={classes.numberButton}>
      <Typography className={classes.blockContent} variant="h4">
        {'+'}
      </Typography>
    </Button>
  );
};

export default AddButton;
