import React, { useState, useEffect, useContext, Fragment, useCallback, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BillIcon from '../../common/BillIcon';
import InputBase from '@material-ui/core/InputBase';

import NumberButton from './components/NumberButton';
import AddButton from './components/AddButton';
import SubtractButton from './components/SubtractButton';
import DeleteButton from './components/DeleteButton';
import CheckButton from './components/CheckButton';
import DateButton from './components/DateButton';
import { Context } from '../../../reducers';
import DatePicker from './components/DatePicker';

const CalculatorInput = ({ classes, height }) => {
  const [blockHeight, setBlockHeight] = useState(0);
  const [date, setDate] = useState(new Date());
  const datePicker = useRef(null);
  const {
    state: { addState },
    dispatch: { addDispatch }
  } = useContext(Context);
  const {
    type,
    category,
    calculator: { info, value, equal }
  } = addState;

  const openDatePicker = useCallback(
    e => {
      if (datePicker.current) {
        datePicker.current.open(e);
      }
    },
    [datePicker.current]
  );

  useEffect(() => {
    setBlockHeight(height / 4);
  }, [height]);

  const handleDate = value => {
    setDate(new Date(value.$d));
  };

  const getButton = tag => {
    const props = { tag, classes, addDispatch };

    if (typeof tag === 'number' || tag === '.') return <NumberButton {...props} />;

    if (tag === '+') return <AddButton {...props} />;
    if (tag === '-') return <SubtractButton {...props} />;

    if (tag === 'delete') return <DeleteButton {...props} />;
    if (tag === 'check') return <CheckButton type={type} category={category} value={value} info={info} equal={equal} {...props} />;
    if (tag === 'date') return <DateButton date={date} handleOpen={openDatePicker} {...props} />;
  };

  const handleInfo = e => {
    addDispatch({
      type: 'CALCULATOR_INFO',
      payload: e.target.value
    });
  };

  return (
    <Fragment>
      <DatePicker datePickerRef={datePicker} date={date} onChange={handleDate} />
      <Grid className={classes.container} container direction="column">
        <Grid className={classes.topContainer} container alignItems="center" justify="space-between">
          <Grid className={classes.topIcon} item>
            <BillIcon category="food" />
          </Grid>
          <Grid className={classes.topInput} item>
            <InputBase value={info} onChange={handleInfo} className={classes.topInputInput} placeholder="Memo" />
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
    </Fragment>
  );
};

const styles = theme => ({
  container: {
    width: '100%'
  },
  topContainer: {
    padding: '12px 8px',
    background: '#f3f3f3',
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
