import React from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
  PhoneAndroid,
  MailOutline,
  Publish,
} from '@material-ui/icons';

export default function User() {
  return (
    <div className='user'>
      <div className='userTitleContaiener'>
        <h1 className='userTitle'> Edit User</h1>
        <Link to={'/mitarbeiter/neuer/zz'}>
          <button className='userAddbutton'>Create</button>
        </Link>
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
            <span className='userShowTitle'>Contact Details</span>
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
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form action='' className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='annabeck99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='annabeck99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input
                  type='text'
                  placeholder='Anna Becker'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder='annabeck99@gmail.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='+49 2451 914462
                  '
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input
                  type='text'
                  placeholder='Hamburg | Deutschland
                  '
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  className='userUpdateImg'
                  src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=440'
                  alt=''
                />
                <label htmlFor='file'>
                  <Publish className='userUpdateIcon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
