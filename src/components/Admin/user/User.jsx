import React from 'react';
import './user.css';
import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
  PhoneAndroid,
  MailOutline,
} from '@material-ui/icons';

export default function User() {
  return (
    <div className='user'>
      <div className='userTitleContaiener'>
        <h1 className='userTitle'> Edit User</h1>
        <button className='userAddbutton'>Create</button>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=440'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Anna Becker</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>annabeck99</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon' />
              <span className='userShowInfoTitle'>10.12.1998</span>
            </div>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+49 2451 914462</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>annabeck99@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>Hamburg | Deutschland</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'></div>
      </div>
    </div>
  );
}
