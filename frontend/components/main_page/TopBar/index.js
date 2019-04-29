import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LeftDrawer from '../LeftDrawer';
import IconButton from '@material-ui/core/IconButton';
import SyncIcon from '@material-ui/icons/Sync';
import DateSelector from './components/DateSelector';

function ButtonAppBar({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <LeftDrawer />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <DateSelector />
          </Typography>
          <IconButton color="inherit" aria-label="sync">
            <SyncIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styles = {
  root: {
    flexGrow: 1
  },
  appBar: {
    color: '#fff'
  },
  toolBar: {
    paddingLeft: 8,
    paddingRight: 8
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export default withStyles(styles)(ButtonAppBar);
