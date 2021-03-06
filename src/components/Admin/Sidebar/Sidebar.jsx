import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  LibraryBooks,
  PersonOutline,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  PeopleOutline,
  Report,
  Description,
} from '@material-ui/icons';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'> Dashboard</h3>
          <ul className='sidebarList'>
            <Link to='/admin' className='link'>
              <li className='sidebarListItem active'>
                <LineStyle className='sidebarIcon' /> Home
              </li>
            </Link>
            <Link to='/admin/projekte' className='link'>
              <li className='sidebarListItem'>
                <LibraryBooks className='sidebarIcon' /> Projekte
              </li>
            </Link>
            <Link to='/admin/teams' className='link'>
              <li className='sidebarListItem'>
                <PeopleOutline className='sidebarIcon' /> Teams
              </li>
            </Link>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'> Benachrichtigungen</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem '>
              <MailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeed className='sidebarIcon' /> FeedBack
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutline className='sidebarIcon' /> Nachrichten
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'> Personal</h3>
          <ul className='sidebarList'>
            <Link to='/admin/mitarbeiter' className='link'>
              <li className='sidebarListItem'>
                <PersonOutline className='sidebarIcon' /> Mitarbeiter
              </li>
            </Link>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' /> Analysen
            </li>
            <li className='sidebarListItem'>
              <TrendingUp className='sidebarIcon' /> Home
            </li>
            <li className='sidebarListItem'>
              <Report className='sidebarIcon' /> Meldungen
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'> Weiteres</h3>
          <li className='sidebarListItem'>
            <Description className='sidebarIcon' /> Dokumente
          </li>
        </div>
      </div>
    </div>
  );
}
