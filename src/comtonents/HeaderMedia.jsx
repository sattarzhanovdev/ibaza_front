import React from 'react'
import { Link } from 'react-router-dom';
import linkImg from '../images/linkImg';

export default function HeaderMedia() {
  const [burgerMenu, setBurgerMenu] = React.useState(false);
  function BurgerMenu(){
    setBurgerMenu(!burgerMenu)
  }
  return (
    <header className='headerMedia'>
      <div className="block">
        <Link to='/' className='header_Link home_logo'>iBAZA</Link>
        <div className="bag">
          <img src={linkImg.bag} alt="" />
        </div>

        <button onClick={BurgerMenu} className='burgerMenu'>
          <svg width="22" height="9" viewBox="0 0 22 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="22" y2="0.5" stroke="white"/>
            <line y1="4.5" x2="22" y2="4.5" stroke="white"/>
            <line y1="8.5" x2="22" y2="8.5" stroke="white"/>
          </svg>
        </button>
        <div className={`ovconvas ${burgerMenu?'true':''}`}>
          <div onClick={BurgerMenu} className="iks">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.5 17.0038C13.1944 17.0038 17 13.1981 17 8.50378C17 3.80945 13.1944 0.00378418 8.5 0.00378418C3.80557 0.00378418 0 3.80945 0 8.50378C0 13.1981 3.80557 17.0038 8.5 17.0038ZM12.2657 4.73816C12.5781 5.05042 12.5781 5.55701 12.2657 5.86951L9.63138 8.50378L12.2657 11.1381C12.5781 11.4506 12.5781 11.9572 12.2657 12.2694C11.9533 12.5819 11.4467 12.5819 11.1343 12.2694L8.5 9.63513L5.86569 12.2694C5.55328 12.5819 5.04675 12.5819 4.73431 12.2694C4.42191 11.9572 4.42191 11.4506 4.73431 11.1381L7.36862 8.50378L4.73431 5.86951C4.42191 5.55701 4.42191 5.05042 4.73431 4.73816C5.04672 4.42566 5.55325 4.42566 5.86569 4.73816L8.5 7.37244L11.1343 4.73816C11.4467 4.42566 11.9533 4.42566 12.2657 4.73816Z" fill="white"/>
            </svg>
          </div>
          <div className="navbar">
            <Link to='/Catalog/Details/Installments/' className='header_Link'>Рассрочка</Link>
            <Link to='/Catalog' className='header_Link'>Каталог</Link>
            <Link to='/Catalog' className='header_Link'>Аксессуары</Link>
            <Link to='/Contacts' className='header_Link'>Контакты</Link>
          </div>
          <div>
            <h1>+996 505 900 030</h1>
            <p>Заказать звонок <img src={linkImg.RightArrow} alt="" /></p>
          </div>
        </div>
      </div>
        <div onClick={BurgerMenu} className={`navbarBg ${burgerMenu?'true':''}`}></div>
    </header>
  )
}
