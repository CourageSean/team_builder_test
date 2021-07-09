import React from 'react';
import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revanue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>5,25€</span>
          <span className='featuredMoneyRate'>
            -5,25 <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>17,52€</span>
          <span className='featuredMoneyRate'>
            -1,25 <ArrowDownward className='featuredIcon negative' />{' '}
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>5,25€</span>
          <span className='featuredMoneyRate'>
            +3,25 <ArrowUpward className='featuredIcon positive' />{' '}
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
    </div>
  );
}
