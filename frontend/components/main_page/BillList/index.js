import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DayCardTitle from './components/DayCardTitle';
import BillIcon from '../../common/BillIcon';

const BillList = ({ classes, data }) => {
  return (
    <Grid container direction="column">
      {data
        .sort((a, b) => b.day - a.day)
        .map((day, index) => (
          <Grid key={index} item className={classes.billCardContainer}>
            <DayCard dayCard={day} classes={classes} />
          </Grid>
        ))}
    </Grid>
  );
};

const DayCard = ({ classes, dayCard }) => (
  <Paper>
    <DayCardTitle dayCard={dayCard} />
    <Divider />
    <List component="nav">
      {dayCard.data.map((o, index) => (
        <ListItem key={index} button>
          <ListItemIcon className={classes.listItemIcon}>
            <BillIcon category={o.category} />
          </ListItemIcon>
          <ListItemText primary={o.info ? o.info : o.category} />
          <ListItemSecondaryAction className={classes.listItemAction}>
            <Typography className={classes.valueText}>{`${o.type === 'income' ? '' : '-'}${o.value}`}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </Paper>
);

const styles = theme => ({
  billCardContainer: {
    marginBottom: 16
  },
  listItemIcon: {
    marginRight: 0
  },
  listItemAction: {
    marginRight: 4
  },
  valueText: {
    color: '#5d5d5d'
  }
});

export default withStyles(styles)(BillList);
