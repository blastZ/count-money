import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import BillIcon from '../../common/BillIcon';
import InputBase from '@material-ui/core/InputBase';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';
import BackspaceIcon from '@material-ui/icons/BackspaceOutlined';

import { dateFormat } from '../../../utils/date';

const CalculatorInput = ({ classes, height }) => {
  const [value, setValue] = useState(0);
  const [blockHeight, setBlockHeight] = useState(0);
  const [add, setAdd] = useState(false);
  const [subtract, setSubtract] = useState(false);
  const date = dateFormat(new Date(), 'M.D');

  useEffect(() => {
    setBlockHeight(height / 4);
  }, [height]);

  const handleNumber = number => () => {
    if (String(value).length === 1 && Number(value) === 0) {
      setValue(number);
    } else {
      setValue(pre => `${pre}${number}`);
    }
  };

  const handleDelete = () => {
    if (value.length > 1) {
      if (value[value.length - 1] === '+') {
        setAdd(false);
      }
      setValue(value.slice(0, value.length - 1));
    } else {
      setValue(0);
    }
  };

  const handleAdd = () => {
    if (!add) {
      setAdd(true);
      if (subtract) {
        sumValue('-');
        setSubtract(false);
      } else {
        setValue(`${value}+`);
      }
    } else {
      sumValue('+');
    }
  };

  const handleSubtract = () => {
    if (!subtract) {
      setSubtract(true);
      if (add) {
        sumValue('+');
        setAdd(false);
      } else {
        setValue(`${value}-`);
      }
    } else {
      sumValue('-');
    }
  };

  const sumValue = operate => {
    if (add) {
      const valueList = value.split('+').filter(o => o);
      if (valueList.length > 1) {
        setValue(`${Number(valueList[0]) + Number(valueList[1])}${operate}`);
      } else {
        setValue(`${value.slice(0, value.length - 1)}${operate}`);
      }
    }

    if (subtract) {
      const valueList = value.split('-').filter(o => o);
      if (valueList.length > 1) {
        setValue(`${Number(valueList[0]) - Number(valueList[1])}${operate}`);
      } else {
        setValue(`${value.slice(0, value.length - 1)}${operate}`);
      }
    }
  };

  const getButton = tag => {
    if (typeof tag === 'number') {
      return (
        <Button onClick={handleNumber(tag)} variant="contained" color="primary" className={classes.numberButton}>
          <Typography className={classes.blockContent} variant="h5">
            {tag}
          </Typography>
        </Button>
      );
    }

    if (tag === '+') {
      return (
        <Button onClick={handleAdd} variant="contained" color="primary" className={classes.numberButton}>
          <Typography className={classes.blockContent} variant="h5">
            {tag}
          </Typography>
        </Button>
      );
    }

    if (tag === '-') {
      return (
        <Button onClick={handleSubtract} variant="contained" color="primary" className={classes.numberButton}>
          <Typography className={classes.blockContent} variant="h5">
            {tag}
          </Typography>
        </Button>
      );
    }

    if (tag === 'ok') {
      return (
        <Button variant="contained" color="secondary" className={classes.numberButton}>
          <Typography className={classes.blockContent} variant="h5">
            {tag}
          </Typography>
        </Button>
      );
    }

    if (tag === 'date') {
      return (
        <Button variant="contained" color="primary" className={classes.numberButton}>
          <Grid className={classes.dateContainer} container direction="column" justify="center">
            <Typography className={classes.blockContent} variant="h6">
              Today
            </Typography>
            <Typography className={classes.blockContent} variant="subtitle2">
              {date.split('.').join('/')}
            </Typography>
          </Grid>
        </Button>
      );
    }

    if (tag === 'delete') {
      return (
        <Button onClick={handleDelete} variant="contained" color="primary" className={classes.numberButton}>
          <Grid className={classes.dateContainer} container direction="column" justify="center">
            <BackspaceIcon style={{ width: '100%' }} />
          </Grid>
        </Button>
      );
    }

    return (
      <Button variant="contained" color="primary" className={classes.numberButton}>
        <Typography className={classes.blockContent} variant="h6">
          {tag}
        </Typography>
      </Button>
    );
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
        {[7, 8, 9, 'date', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, 'delete', 'ok'].map((o, index) => {
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
