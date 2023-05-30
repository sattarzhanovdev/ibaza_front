import React from 'react';
import Teaser from '../comtonents/Home/Teaser';
import SliderMedia from '../comtonents/Home/component/sliderMedia';
import BestSelling from '../comtonents/Home/BestSelling';
import Comments from '../comtonents/Home/Comments';
import Exclusives from '../comtonents/Home/Exclusives';
import SubmitCart from './SubmitCart';
export default function Home({darkMode, itemCart}) {
  return (
    <div className='Home'>
        {/* <SubmitCart/> */}
        <Teaser />
        <SliderMedia/>
        <BestSelling  />
        <Comments/>
        <Exclusives/>
    </div>
  )
}
