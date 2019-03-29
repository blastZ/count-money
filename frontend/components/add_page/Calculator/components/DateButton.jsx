import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { dateFormat } from '../../../../utils/date';

const DateButton = ({ dispatch, classes }) => {
  const date = dateFormat(new Date(), 'M.D');

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
};

export default DateButton;
