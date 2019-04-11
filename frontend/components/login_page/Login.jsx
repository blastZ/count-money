import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Router from 'next/router';

import { post } from '../../utils/fetch';

const Login = props => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { classes } = props;

  const handleLogin = () => {
    post('/user/login', {
      body: JSON.stringify({
        name,
        password
      })
    })
      .then(res => {
        console.log(res);
        if (res.success) {
          Router.push('/');
        } else {
          console.error('Login Failed');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          CM LOGIN
        </Typography>
        <div className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">User Name</InputLabel>
            <Input
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              id="name"
              name="name"
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input value={password} onChange={e => setPassword(e.target.value)} name="password" type="password" id="password" />
          </FormControl>
          <Button onClick={handleLogin} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Login
          </Button>
        </div>
      </Paper>
    </main>
  );
};

const styles = theme => ({
  main: {
    height: '100vh',
    overflow: 'hidden',
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    height: '80%',
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

export default withStyles(styles)(Login);
