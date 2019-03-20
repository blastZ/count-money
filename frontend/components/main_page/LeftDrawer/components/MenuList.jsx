import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SettingIcon from '@material-ui/icons/Settings';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';
import ChartIcon from '@material-ui/icons/InsertChart';
import Avatar from '@material-ui/core/Avatar';
import AndroidIcon from '@material-ui/icons/Android';
import AboutIcon from '@material-ui/icons/PriorityHigh';
import green from '@material-ui/core/colors/green';
import { yellow } from '@material-ui/core/colors';

const MenuList = ({ classes }) => {
  return (
    <div className={classes.list}>
      <div className={classes.userContainer} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ChartIcon className={classes.chartIcon} />
          </ListItemIcon>
          <ListItemText primary={'Chart'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingIcon className={classes.settingIcon} />
          </ListItemIcon>
          <ListItemText primary={'Settings'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AboutIcon className={classes.aboutIcon} />
          </ListItemIcon>
          <ListItemText primary={'About'} />
        </ListItem>
      </List>
    </div>
  );
};

const styles = theme => ({
  list: {
    width: 250
  },
  userContainer: {
    height: 200,
    backgroundColor: yellow['A700'],
    marginBottom: 8
  },
  aboutIcon: {
    color: green[500]
  },
  settingIcon: {
    color: blue[500]
  },
  chartIcon: {
    color: purple[500]
  }
});

export default withStyles(styles)(MenuList);
