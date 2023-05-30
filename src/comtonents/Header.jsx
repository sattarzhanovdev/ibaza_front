import React from 'react'
import { Link } from 'react-router-dom';
import linkImg from '../images/linkImg';

export default function Header() {
  return (
    <header >
      <div className="block">
        <Link to='/' className='header_Link home_logo'>iBAZA</Link>
        <nav>
          <Link to='/Catalog/Details/Installments/' className='header_Link'>Рассрочка</Link>
          <Link to='/Catalog' className='header_Link'>Каталог</Link>
          <Link to='/Catalog' className='header_Link'>Аксессуары</Link>
          <Link to='/Contacts' className='header_Link'>Контакты</Link>
        </nav>
        <div className="search">
          <input type="search" placeholder='Поиск'/>
          <img src={linkImg.Search} alt="" />
        </div>
        <Link to='/Bag'>
          <div className="bag">
            <img src={linkImg.bag} alt="" />
          </div>
        </Link>
      </div>
    </header>
  )
}
