import React from 'react';
import './adminDashboard.css';
import Sidebar from './components/Admin/Sidebar/Sidebar';

import Topbar from './components/Admin/AdminTopbar/Topbar';
import Home from './components/Admin/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserList from './components/Admin/userList/UserList';
import User from './components/Admin/user/User';

export default function AdminDashboard() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/admin'>
            <Home />
          </Route>
          <Route path='/admin/mitarbeiter'>
            <UserList />
          </Route>
          <Route path='/:userId'>
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
