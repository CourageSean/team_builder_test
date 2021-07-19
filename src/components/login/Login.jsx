import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import useStyles from './styles';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Login() {
  let history = useHistory();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const classes = useStyles();

  const handleSubmit = async (e) => {
    axios.defaults.withCredentials = true;

    e.preventDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/auth/login',

        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            // 'Content-Type': 'application/json',
          },
        }
      );
      setUser(response.data);
      Cookies.set('RefreshToken', response.data.refreshToken);

      if (response.data.isAdmin && response.data.user.role === 'admin')
        return history.push('/admin');
      if (response.data.user.role === 'employee')
        return history.push('/dashboard');

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // const tokenExpirationDate =
    //   expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    // setTokenExpirationDate(tokenExpirationDate);
    // localStorage.setItem(
    //   'userData',
    //   JSON.stringify({
    //     // userId: uid,
    //     // token: token,
    //     // expiration: tokenExpirationDate.toISOString()
    //     accessToken: user.accessToken,
    //     refreshToken: user.refreshToken,
    //   })
    // );
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Paper className={classes.paper} elevation={5}>
          <Grid align='center'>
            <Avatar className={classes.loginAvatar}>
              <LockOutlined />
            </Avatar>
            <h2 className={classes.loginHeader}>teamBuilder</h2>
          </Grid>
          <TextField
            className={classes.loginInput}
            label='Benutzername'
            variant='outlined'
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.loginInput}
            label='Password'
            variant='outlined'
            type='password'
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            className={classes.loginButton}
            type='submit'
            variant='contained'
            color='inherit'
          >
            Einloggen
          </Button>
        </Paper>
      </Grid>
    </form>
  );
}
