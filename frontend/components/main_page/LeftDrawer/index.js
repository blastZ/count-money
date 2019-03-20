import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MenuList from './components/MenuList';

function LeftDrawer({ classes }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
  };

  return (
    <div>
      <IconButton onClick={handleOpen} className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Drawer open={show} onClose={handleClose}>
        <div tabIndex={0} role="button" onClick={handleClose} onKeyDown={handleClose}>
          <MenuList />
        </div>
      </Drawer>
    </div>
  );
}

const styles = theme => ({});

export default withStyles(styles)(LeftDrawer);
