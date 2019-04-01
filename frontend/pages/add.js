import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TopBar from '../components/add_page/TopBar';
import Calculator from '../components/add_page/Calculator';
import CategoryList from '../components/add_page/CategoryList';

const AddPage = ({ classes }) => {
  return (
    <Grid container>
      <TopBar />
      <Grid className={classes.categoryContainer} container>
        <CategoryList type={'expenses'} />
      </Grid>
      <Grid className={classes.calculatorContainer} container>
        <Calculator height={360} />
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  categoryContainer: {
    marginTop: 72
  },
  calculatorContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%'
  }
});

export default withStyles(styles)(AddPage);
