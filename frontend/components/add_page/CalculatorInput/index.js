import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import BillIcon from '../../common/BillIcon';
import InputBase from '@material-ui/core/InputBase';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';

const CalculatorInput = ({ classes }) => {
  const [value, setValue] = useState(66666666);

  const getButton = tag => {
    if (typeof tag === 'number') {
      return (
        <Button variant="contained" color="primary" className={classes.numberButton}>
          {tag}
        </Button>
      );
    } else {
      if (tag === 'ok') {
        return (
          <Button variant="contained" color="secondary" className={classes.numberButton}>
            <CheckIcon style={{ fontSize: '1.7em' }} />
          </Button>
        );
      }

      return (
        <Button variant="contained" color="primary" className={classes.numberButton}>
          {tag}
        </Button>
      );
    }
  };

  return (
    <Grid className={classes.container} container direction="column">
      <Grid className={classes.topContainer} container alignItems="center" justify="space-between">
        <Grid className={classes.topIcon} item>
          <BillIcon category="food" />
        </Grid>
        <Grid className={classes.topInput} item>
          <InputBase className={classes.topInputInput} defaultValue="Memo" />
        </Grid>
        <Grid className={classes.topValue} item>
          <Typography variant="h5">{value}</Typography>
        </Grid>
      </Grid>
      <Grid className={classes.bottomContainer} container alignItems="center" justify="space-between">
        {[[7, 4, 1, '.'], [8, 5, 2, 0], [9, 6, 3, 'delete'], ['date', '+', '-', 'ok']].map((o, index) => {
          return (
            <Grid className={classes.columnContainer} key={index} container direction="column" justify="center" wrap="nowrap">
              {o.map((oo, index) => {
                return (
                  <Grid className={classes.numberContainer} key={index} container justify="center" alignItems="center">
                    {getButton(oo)}
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  container: {
    width: '100%'
  },
  topContainer: {
    padding: '12px 8px',
    background: '#e4e4e43b',
    borderTop: '0.5px solid #e4e4e4'
  },
  topInput: {
    flex: 1,
    marginLeft: 12,
    marginRight: 14
  },
  topInputInput: {
    width: '100%',
    color: '#3e3e3e',
    opacity: 0.5
  },
  topValue: {
    marginRight: 8
  },
  bottomContainer: {},
  columnContainer: {
    width: '25%'
  },
  numberContainer: {
    border: '1px solid #fff'
  },
  numberButton: {
    width: '100%',
    borderRadius: 0,
    padding: 24,
    fontSize: '1.4em'
  }
});

export default withStyles(styles)(CalculatorInput);
