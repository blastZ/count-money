import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TopBar from '../components/add_page/TopBar';
import Calculator from '../components/add_page/Calculator';

const AddPage = ({ classes }) => {
  return (
    <Grid container>
      <TopBar />
      <Grid className={classes.inputContainer} item>
        <Calculator height={360} />
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  inputContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%'
  }
});

export default withStyles(styles)(AddPage);
