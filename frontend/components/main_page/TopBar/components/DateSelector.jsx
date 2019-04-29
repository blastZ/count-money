import { useState, useCallback, useRef, useContext } from 'react';
import { DatePicker } from 'material-ui-pickers';
import { withStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';

import { Context } from '../../../../reducers';

const Main = ({ classes }) => {
  const {
    state: {
      appState: { date }
    },
    dispatch: { appDispatch }
  } = useContext(Context);
  const pickerRef = useRef(null);

  const openPicker = useCallback(
    e => {
      if (pickerRef.current) {
        pickerRef.current.open(e);
      }
    },
    [pickerRef.current]
  );

  const handleChange = date => {
    appDispatch({
      type: 'SET_DATE',
      payload: new Date(date)
    });
  };

  return (
    <div>
      <DatePicker
        minDate={new Date('2016-01-01')}
        ref={pickerRef}
        TextFieldComponent={() => (
          <span className={classes.date} onClick={openPicker}>
            {dayjs(date).format('MMM')}
          </span>
        )}
        disableFuture
        views={['year', 'month']}
        label=""
        value={date}
        onChange={handleChange}
        animateYearScrolling
      />
    </div>
  );
};

const styles = () => ({
  date: {
    marginLeft: 16,
    cursor: 'pointer',
    padding: '4px 8px',
    '&:hover': {
      borderBottom: '2px solid white'
    }
  }
});

export default withStyles(styles)(Main);
