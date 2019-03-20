import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Title = ({ classes, dayCard }) => {
  const income = dayCard.data.reduce((result, current) => {
    if (current.type === 'income') {
      return result + current.value;
    } else {
      return result;
    }
  }, 0);
  const expenses = dayCard.data.reduce((result, current) => {
    if (current.type === 'expenses') {
      return result + current.value;
    } else {
      return result;
    }
  }, 0);

  return (
    <Grid container justify="space-between" className={classes.container}>
      <Grid item>
        <Typography>03/15 Fri</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={8}>
          {income > 0 && (
            <Grid item>
              <Typography>{`Income: ${income}`}</Typography>
            </Grid>
          )}
          {expenses > 0 && (
            <Grid item>
              <Typography>{`Expenses: ${expenses}`}</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  container: {
    padding: 8
  }
});

export default withStyles(styles)(Title);
