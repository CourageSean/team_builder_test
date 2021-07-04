import React from 'react';
import './adminDashboard.css';
import Sidebar from './components/Admin/Sidebar/Sidebar';

import Topbar from './components/Admin/AdminTopbar/Topbar';
import Home from './components/Admin/Home/Home';

export default function AdminDashboard() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Home />
        {/* <div className='others'>other pages</div> */}
      </div>
    </div>
  );
}
