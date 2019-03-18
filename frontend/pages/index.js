import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Input, Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import TopBar from '../components/TopBar';
import InfoCard from '../components/InfoCard';
import BillList from '../components/BillList';

const HomePage = ({ classes }) => {
  return (
    <Fragment>
      <TopBar />
      <Grid container direction="column" className={classes.container}>
        <Grid item>
          <InfoCard />
        </Grid>
        <Grid item className={classes.billContainer}>
          <BillList />
        </Grid>
      </Grid>
    </Fragment>
  );
};

const styles = theme => ({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 64,
    padding: 8
  },
  billContainer: {
    marginTop: 16
  },
  addButton: {
    width: 64,
    height: 64
  },
  addButtonText: {
    fontSize: 32
  }
});

export default withStyles(styles)(HomePage);
