import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import expensesUtil from '../../../utils/expenses';
import BillIcon from '../../common/BillIcon';

const CategoryList = ({ type, classes, handleCalculator }) => {
  const [category, setCategory] = useState(null);
  const expensesList = expensesUtil.getCategoryGrid();

  const handleClick = category => () => {
    setCategory(category);
    handleCalculator();
  };

  if (type === 'expenses') {
    return (
      <Grid container className={classes.container} direction="column">
        {expensesList.map((categoryList, index) => (
          <Grid className={classes.rowContainer} container key={index}>
            {categoryList.map(o => (
              <BillIcon
                onClick={handleClick(o)}
                key={o}
                category={o}
                styles={{ width: '25%' }}
                active={o === category}
                showText={true}
                size={52}
              />
            ))}
          </Grid>
        ))}
      </Grid>
    );
  } else {
    return <Grid container />;
  }
};

const styles = theme => ({
  container: {
    width: '100%'
  },
  rowContainer: {
    margin: '12px 0px'
  }
});

export default withStyles(styles)(CategoryList);
