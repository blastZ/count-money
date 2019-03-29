import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AddButton = ({ dispatch, classes }) => {
  const handleAdd = () => {
    dispatch({ type: 'ADD' });
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
