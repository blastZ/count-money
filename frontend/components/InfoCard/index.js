import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function InfoCard({ classes }) {
  return (
    <div className={classes.container}>
      <Paper className={classes.root} elevation={1}>
        <Grid className={classes.infoContainer} container alignItems="center" justify="space-between">
          <Grid item>
            <Info text="Income" value={20} />
          </Grid>
          <Grid item>
            <Info text="Expenses" value={20} />
          </Grid>
          <Grid item>
            <Info text="Balance" value={0} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const Info = ({ text, value }) => (
  <Grid container direction="column" alignItems="center">
    <Typography variant="subtitle1">{text}</Typography>
    <Typography variant="h6">{value}</Typography>
  </Grid>
);

const styles = theme => ({
  container: {
    width: '100%'
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  infoContainer: {
    width: '100%',
    padding: '0px 16px'
  }
});

export default withStyles(styles)(InfoCard);
