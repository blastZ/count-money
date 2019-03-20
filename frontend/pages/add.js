import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TopBar from '../components/add_page/TopBar';

const AddPage = () => {
  return (
    <Grid container>
      <TopBar />
      <Grid item>
        <p>ADD</p>
      </Grid>
    </Grid>
  );
};

const styles = theme => ({});

export default withStyles(styles)(AddPage);
