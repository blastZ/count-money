import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BillIcon from '../../common/BillIcon';
import InputBase from '@material-ui/core/InputBase';

import useCalculator from './hooks/useCalculator';
import NumberButton from './components/NumberButton';
import AddButton from './components/AddButton';
import SubtractButton from './components/SubtractButton';
import DeleteButton from './components/DeleteButton';
import CheckButton from './components/CheckButton';
import DateButton from './components/DateButton';

const CalculatorInput = ({ classes, height }) => {
  const [blockHeight, setBlockHeight] = useState(0);
  const {
    state: { value, equal },
    dispatch
  } = useCalculator();

  useEffect(() => {
    setBlockHeight(height / 4);
  }, [height]);

  const getButton = tag => {
    const props = { tag, classes, dispatch };

    if (typeof tag === 'number' || tag === '.') return <NumberButton {...props} />;

    if (tag === '+') return <AddButton {...props} />;
    if (tag === '-') return <SubtractButton {...props} />;

    if (tag === 'delete') return <DeleteButton {...props} />;
    if (tag === 'check') return <CheckButton equal={equal} {...props} />;
    if (tag === 'date') return <DateButton {...props} />;
  };

  return (
    <Grid className={classes.container} container direction="column">
      <Grid className={classes.topContainer} container alignItems="center" justify="space-between">
        <Grid className={classes.topIcon} item>
          <BillIcon category="food" />
        </Grid>
        <Grid className={classes.topInput} item>
          <InputBase className={classes.topInputInput} placeholder="Memo" />
        </Grid>
        <Grid className={classes.topValue} item>
          <Typography variant="h4">{value}</Typography>
        </Grid>
      </Grid>
      <Grid
        className={classes.bottomContainer}
        style={{
          height
        }}
        container>
        {[7, 8, 9, 'date', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, 'delete', 'check'].map((o, index) => {
          return (
            <Grid
              className={classes.blockContainer}
              key={index}
              container
              justify="center"
              alignItems="center"
              style={{
                height: blockHeight
              }}>
              {getButton(o)}
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
  blockContainer: {
    width: '25%',
    padding: 1
  },
  blockContent: {
    color: 'white'
  },
  numberButton: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    fontSize: '1.4em'
  },
  dateContainer: {
    color: 'white'
  }
});

export default withStyles(styles)(CalculatorInput);