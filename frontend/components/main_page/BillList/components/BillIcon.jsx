import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import blue from '@material-ui/core/colors/blue';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import IconList from './IconList';

const getColor = category => {
  switch (category) {
    case 'food':
      return yellow[700];
    case 'transport':
      return blue[500];
    case 'game':
      return green[500];
    case 'movie':
      return red[500];
    default:
      return yellow[700];
  }
};

const styles = {
  avatar: {
    color: '#fff',
    width: 38,
    height: 38
  }
};

function BillIcon({ classes, category }) {
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        className={classes.avatar}
        style={{
          backgroundColor: getColor(category)
        }}>
        <IconList category={category} />
      </Avatar>
    </Grid>
  );
}

export default withStyles(styles)(BillIcon);
