import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

import { post } from '../../../../utils/fetch';

const CheckButton = ({ type, category, value, info, equal, addDispatch, classes }) => {
  const handleEqual = () => {
    addDispatch({ type: 'CALCULATOR_EQUAL' });
  };

  const handleAdd = () => {
    const data = {
      type,
      category,
      value,
      info
    };

    post('/bill/add', {
      body: JSON.stringify(data)
    }).then(res => {
      if (res.success) {
        Router.push('/');
      }
    });
  };

  return (
    <Button onClick={equal ? handleEqual : handleAdd} variant="contained" color="secondary" className={classes.numberButton}>
      <Typography className={classes.blockContent} variant={equal ? 'h4' : 'h5'}>
        {equal ? '=' : 'OK'}
      </Typography>
    </Button>
  );
};

export default CheckButton;
