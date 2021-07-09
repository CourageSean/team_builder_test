import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>teamBuilder</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>9+</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <div className='topAvatar'>
            <img
              src='https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}
