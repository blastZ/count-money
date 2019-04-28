import React, { Fragment, useContext, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Input, Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Router from 'next/router';

import TopBar from '../components/main_page/TopBar';
import InfoCard from '../components/main_page/InfoCard';
import BillList from '../components/main_page/BillList';
import { Context } from '../reducers';
import { get } from '../utils/fetch';

const HomePage = ({ classes }) => {
  const {
    state: { appState },
    dispatch: { appDispatch }
  } = useContext(Context);

  useEffect(() => {
    get('/bill/list', null).then(res => {
      let data = [];
      if (res.success) {
        const tempData = res.data
          .map(o => {
            const date = new Date(o.createdAt);
            return {
              ...o,
              year: date.getFullYear(),
              month: date.getMonth() + 1,
              day: date.getDate()
            };
          })
          .reduce((result, current) => {
            const date = `${current.year}-${current.month}-${current.day}`;
            if (result[date]) {
              result[date].push(current);
            } else {
              result[date] = [current];
            }

            return result;
          }, {});

        data = Object.keys(tempData).map(key => ({
          year: key.split('-')[0],
          month: key.split('-')[1],
          day: key.split('-')[2],
          data: tempData[key].map(o => ({
            id: o.id,
            type: o.type,
            category: o.category,
            info: o.info,
            value: o.value
          }))
        }));
      }

      appDispatch({
        type: 'GET_BILL_LIST',
        payload: data
      });
    });
  }, []);

  return (
    <Fragment>
      <TopBar />
      <Grid container direction="column" className={classes.container}>
        <Grid item>
          <InfoCard />
        </Grid>
        <Grid item className={classes.billContainer}>
          <BillList data={appState.billList} />
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
