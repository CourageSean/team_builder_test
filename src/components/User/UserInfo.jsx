import React from 'react';
import useStyles from './styles.jsx';
import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
  PhoneAndroid,
  MailOutline,
  Publish,
} from '@material-ui/icons';
export default function UserInfo() {
  const classes = useStyles();

  return (
    <div className={classes.userShow}>
      <div className={classes.userShowTop}>
        <img
          src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=440'
          alt=''
          className={classes.userShowImg}
        />
        <div className='userShowTopTitle'>
          <span className='userShowUsername'>Anna Becker</span>
          <span className='userShowUserTitle'>Software Engineer</span>
        </div>
      </div>
      <div className='userShowBottom'>
        <span className='userShowTitle'>Ansprechpartner für</span>
        <div className='userShowInfo'>
          <CalendarToday className='userShowIcon' />
          <span className='userShowInfoTitle'>Adobe</span>
          <span className='userShowInfoTitle'>Projektmanagement</span>
          <span className='userShowInfoTitle'>Bilddruck</span>
        </div>
        <div className='userShowInfo'></div>
        <span className='userShowTitle'>Contact Details</span>

        <div className='userShowInfo'>
          <PermIdentity className='userShowIcon' />
          <span className='userShowInfoTitle'>annabeck99@gmail.com</span>
        </div>

        <div className='userShowInfo'></div>
      </div>
    </div>
  );
}
