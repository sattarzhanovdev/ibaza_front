import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GroupedCarousel from './component/GroupedCarousel';
export default function BestSelling() {

  const itemCart = useSelector(s=>s.itemCart)
  console.log(itemCart)


  return (
    <div className='BestSelling'>
      <div className="block">
        <h1>Лучшие продажи</h1>
            <GroupedCarousel itemCart={itemCart}/>
            <Link to='/Catalog' className='block_btn'>Открыть каталог</Link>
      </div>
    </div>
  )
}