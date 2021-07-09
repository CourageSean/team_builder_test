import React from 'react';
import Chart from '../chart/Chart';
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo';
import WidgetSmall from '../widgetSmall/WidgetSmall';
import WidgetLarge from '../widgetLarge/WidgetLarge';
import { data } from '../../../dummieData';
import './home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLarge />
      </div>
      <FeaturedInfo />
      <Chart title='Projekt Analyse' data={data} grid dataKey='Active User' />
    </div>
  );
}
