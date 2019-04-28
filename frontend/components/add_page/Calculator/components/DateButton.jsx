import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { dateFormat } from '../../../../utils/date';

const DateButton = ({ handleOpen, classes, date }) => {
  const formatDate = dateFormat(date, 'M.D');
  const current = dateFormat(new Date(), 'M.D');
  let today = true;

  if (formatDate !== current) today = false;

  return (
    <Button onClick={handleOpen} variant="contained" color="primary" className={classes.numberButton}>
      <Grid className={classes.dateContainer} container direction="column" justify="center">
        {today ? (
          <>
            <Typography className={classes.blockContent} variant="h6">
              Today
            </Typography>
            <Typography className={classes.blockContent} variant="subtitle2">
              {formatDate.split('.').join('/')}
            </Typography>
          </>
        ) : (
          <>
            <Typography className={classes.blockContent} variant="h6">
              {formatDate.split('.').join('/')}
            </Typography>
            <Typography className={classes.blockContent} variant="subtitle2">
              {date.getFullYear()}
            </Typography>
          </>
        )}
      </Grid>
    </Button>
  );
};

export default DateButton;
