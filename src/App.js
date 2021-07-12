import AdminDashboard from './AdminDashboard';
import Homepage from './components/homepage/Homepage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import network from './images/network.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Login from './components/login/Login';
// import useStyles from './styles';
function App() {
  // const classes = useStyles();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <AdminDashboard />
      </Switch>
    </Router>
  );
}

export default App;
