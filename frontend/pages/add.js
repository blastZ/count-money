import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TopBar from '../components/add_page/TopBar';
import Calculator from '../components/add_page/Calculator';
import CategoryList from '../components/add_page/CategoryList';
import { useTransition, animated, config } from 'react-spring';

const AddPage = ({ classes }) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const transitions = useTransition(showCalculator, null, {
    from: { transform: 'translateY(360px)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(360px)' },
    config: { ...config.slow, friction: 30 }
  });

  return (
    <Grid container>
      <TopBar />
      <Grid className={classes.categoryContainer} container>
        <CategoryList
          type={'expenses'}
          handleCalculator={() => {
            setShowCalculator(true);
          }}
        />
      </Grid>
      <Grid className={classes.calculatorContainer} container>
        {transitions.map(({ item, key, props }) => (
          <animated.div key={key} style={props}>
            {item && <Calculator height={360} />}
          </animated.div>
        ))}
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  categoryContainer: {
    marginTop: 72
  },
  calculatorContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%'
  }
});

export default withStyles(styles)(AddPage);
