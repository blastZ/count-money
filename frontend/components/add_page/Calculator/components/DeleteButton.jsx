import Button from '@material-ui/core/Button';
import BackspaceIcon from '@material-ui/icons/BackspaceOutlined';
import Grid from '@material-ui/core/Grid';

const DeleteButton = ({ classes, addDispatch }) => {
  const handleDelete = () => {
    addDispatch({ type: 'CALCULATOR_DELETE' });
  };

  return (
    <Button onClick={handleDelete} variant="contained" color="primary" className={classes.numberButton}>
      <Grid className={classes.dateContainer} container direction="column" justify="center">
        <BackspaceIcon style={{ width: '100%' }} />
      </Grid>
    </Button>
  );
};

export default DeleteButton;
