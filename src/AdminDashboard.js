import React, { useEffect } from 'react';
import './adminDashboard.css';
import Sidebar from './components/Admin/Sidebar/Sidebar';
import Topbar from './components/Admin/AdminTopbar/Topbar';
import Home from './components/Admin/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserList from './components/Admin/userList/UserList';
import User from './components/Admin/user/User';
import CreateUser from './components/Admin/createUser/CreateUser';
import Projekte from './components/Admin/projekte/Projekte';
import Teams from './components/Admin/teams/Teams';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

export default function AdminDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/admin'>
            <Home />
          </Route>
          <Route path='/admin/projekte'>
            <Projekte />
          </Route>
          <Route path='/admin/teams'>
            <Teams />
          </Route>

          <Route path='/admin/mitarbeiter'>
            <UserList />
          </Route>
          <Route path='/list/:userId'>
            <User />
          </Route>
          <Route path='/admin/neu'>
            <CreateUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
