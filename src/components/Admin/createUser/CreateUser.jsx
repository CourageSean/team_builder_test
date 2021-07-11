import React from 'react';
import './createUser.css';

export default function CreateUser() {
  return (
    <div className='createUser'>
      <h1 className='createUserTitle'>New User</h1>
      <form className='createUserForm'>
        <div className='createUserItem'>
          <label htmlFor=''>Username</label>
          <input type='text' placeholder='john' />
        </div>
        <div className='createUserItem'>
          <label htmlFor=''>Full Name</label>
          <input type='text' placeholder='john Smith' />
        </div>
        <div className='createUserItem'>
          <label htmlFor=''>Email</label>
          <input type='email' placeholder='john@gmail.com' />
        </div>
        <div className='createUserItem'>
          <label htmlFor=''>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='createUserItem'>
          <label htmlFor=''>Phone</label>
          <input type='text' placeholder='+49 2451 914456' />
        </div>
        <div className='createUserItem'>
          <label htmlFor=''>Address</label>
          <input type='text' placeholder='Hamburg | Deutschland' />
        </div>
        <div className='createUserItem'>
          <label htmlFor=''>Gender</label>
          <div className='createUserGender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label for='other'>Other</label>
          </div>
        </div>
        <div className='createUserItem'>
          <label htmlFor=''>Active</label>
          <select name='active' id='active' className='createUserSelect'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='createUserButton'> Create</button>
      </form>
    </div>
  );
}
