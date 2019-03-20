import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Input, Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Router from 'next/router';

import TopBar from '../components/main_page/TopBar';
import InfoCard from '../components/main_page/InfoCard';
import BillList from '../components/main_page/BillList';

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
      <Fab onClick={() => Router.push('/add')} color="primary" aria-label="Add" className={classes.addButton}>
        <AddIcon />
      </Fab>
    </Fragment>
  );
};

const styles = theme => ({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 64,
    padding: '8px 16px'
  },
  billContainer: {
    marginTop: 16
  },
  addButton: {
    width: 56,
    height: 56,
    position: 'fixed',
    bottom: 16,
    right: 24
  },
  addButtonText: {
    fontSize: 32
  }
});

export default withStyles(styles)(HomePage);
