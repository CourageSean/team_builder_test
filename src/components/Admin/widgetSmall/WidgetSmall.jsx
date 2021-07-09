import React from 'react';
import './widgetSmall.css';
import { Visibility } from '@material-ui/icons';

export default function widgetSmall() {
  return (
    <div className='widgetSmall'>
      <span className='widgetSmallTitle'>Bereichsleiter</span>
      <ul className='widgetSmallList'>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=440'
            alt=''
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Michelle Jonson</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Anzeigen
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=440'
            alt=''
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Michelle Jonson</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Anzeigen
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=440'
            alt=''
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Michelle Jonson</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Anzeigen
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=440'
            alt=''
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Michelle Jonson</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Anzeigen
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=440'
            alt=''
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Michelle Jonson</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Anzeigen
          </button>
        </li>
      </ul>
    </div>
  );
}
