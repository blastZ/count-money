import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const Login = ({ classes }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Grid container justify="center" className={classes.container} alignItems="center">
      <Paper className={classes.paper} elevation={1}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <TextField
              id="outlined-name"
              label="Name"
              className={classes.name}
              value={name}
              onChange={value => setName(value)}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-password"
              label="Password"
              className={classes.password}
              value={password}
              onChange={value => setPassword(value)}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const styles = () => ({
  container: {
    height: '100vh'
  },
  paper: {
    width: '80%',
    height: '60%',
    padding: '64px 32px'
  },
  name: {},
  password: {}
});

export default withStyles(styles)(Login);
