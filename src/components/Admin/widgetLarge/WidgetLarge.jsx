import React from 'react';
import './widgetLarge.css';

export default function widgetLarge() {
  const Button = ({ type }) => {
    return <button className={'widgetLargeButton ' + type}>{type} </button>;
  };
  return (
    <div className='widgetLarge'>
      <h3 className='widgetLargeTitle'>Laufende Projekte</h3>
      <table className='widgetLargeTable'>
        <tr className='widgetLargeTr'>
          <th className='widgetLargeTh'> Teamleiter</th>
          <th className='widgetLargeTh'> Datum</th>
          <th className='widgetLargeTh'> Projekt</th>
          <th className='widgetLargeTh'> Status</th>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=3&&w=500'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>John Doe</span>
          </td>
          <td className='widgetLargeDate'>23 Jun 2021</td>
          <td className='widgetLargeAmount'>Dojo</td>
          <td className='widgetLargeStatus'>
            {' '}
            <Button type='Fertig' />{' '}
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=3&&w=500'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>John Doe</span>
          </td>
          <td className='widgetLargeDate'>23 Jun 2021</td>
          <td className='widgetLargeAmount'>Superman</td>
          <td className='widgetLargeStatus'>
            {' '}
            <Button type='Stop' />{' '}
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=3&&w=500'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>John Doe</span>
          </td>
          <td className='widgetLargeDate'>23 Jun 2021</td>
          <td className='widgetLargeAmount'>455.10€</td>
          <td className='widgetLargeStatus'>
            {' '}
            <Button type='Pausiert' />{' '}
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=3&&w=500'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>John Doe</span>
          </td>
          <td className='widgetLargeDate'>23 Jun 2021</td>
          <td className='widgetLargeAmount'>455.10€</td>
          <td className='widgetLargeStatus'>
            {' '}
            <Button type='Fertig' />{' '}
          </td>
        </tr>
      </table>
    </div>
  );
}
