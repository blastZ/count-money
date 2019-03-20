import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import Router from 'next/router';

function ButtonAppBar({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <IconButton onClick={() => Router.back()} color="inherit" aria-label="sync">
            <BackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow} />
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
