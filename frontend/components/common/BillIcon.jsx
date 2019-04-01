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
import { Typography } from '@material-ui/core';

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

function BillIcon({ classes, category, styles, active = true, showText = false, onClick, size = 38 }) {
  const text = category[0].toUpperCase() + category.slice(1);

  return (
    <Grid container style={styles} justify="center" alignItems="center" direction="column">
      <Avatar
        onClick={onClick}
        className={classes.avatar}
        style={{
          width: size,
          height: size,
          backgroundColor: active ? getColor(category) : '#dcdcdc',
          color: active ? '#fff' : '#525252'
        }}>
        <IconList category={category} />
      </Avatar>
      {showText && <Typography>{text}</Typography>}
    </Grid>
  );
}

const styles = {
  avatar: {}
};

export default withStyles(styles)(BillIcon);
