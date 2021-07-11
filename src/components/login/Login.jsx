import React from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import useStyles from './styles';

export default function Login() {
  const classes = useStyles();
  return (
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
        />
        <TextField
          className={classes.loginInput}
          label='Password'
          variant='outlined'
          type='password'
          fullWidth
        />

        <Button
          className={classes.loginButton}
          type='submit'
          variant='contained'
          color='primary'
        >
          Einloggen
        </Button>
      </Paper>
    </Grid>
  );
}
