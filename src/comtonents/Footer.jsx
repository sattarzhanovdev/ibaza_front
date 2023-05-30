import React from 'react'
import { Link } from 'react-router-dom';
import linkImg from '../images/linkImg';

export default function Footer({ darkMode }) {
  return (
    <footer id={darkMode?'':'lightMode'}>
      <div className="block">
        <div className="top">
          <Link to='/' className='home_logo'>iBAZA</Link>
          <div className="left">
            <h1>+996 505 900 030</h1>
            <p>Заказать звонок
              <img src={linkImg.RightArrow} alt="" />
            </p>
            <div className="bottom">
              <img src={linkImg.WhatsApp_1} alt="" />
              <img src={linkImg.Instagram_1} alt="" />
              <img src={linkImg.Facebook_1} alt="" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">

            <div className="table_1">
              <span className='h2'>Аксессуары</span>
              <div>
                <Link to='/' className='footerLink'>Документы</Link>
                <Link to='/' className='footerLink'>Проценты</Link>
                <Link to='/' className='footerLink'>Банки</Link>
                <Link to='/' className='footerLink'>Калькулятор</Link>
              </div>

            </div>
            <div className="table_1">
              <span className='h2'>Trade in</span>
              <div>
                <Link to='/' className='footerLink'>Документы</Link>
                <Link to='/' className='footerLink'>Проценты</Link>
                <Link to='/' className='footerLink'>Банки</Link>
                <Link to='/' className='footerLink'>Калькулятор</Link>
              </div>

            </div>
            <div className="table_1">
              <span className='h2'>Каталог</span>
              <div>
                <Link to='/' className='footerLink'>Документы</Link>
                <Link to='/' className='footerLink'>Проценты</Link>
                <Link to='/' className='footerLink'>Банки</Link>
                <Link to='/' className='footerLink'>Калькулятор</Link>
              </div>

            </div>
            <div className="table_1">
              <span className='h2'>Контакты</span>
              <div>
                <Link to='/' className='footerLink'>Документы</Link>
                <Link to='/' className='footerLink'>Проценты</Link>
                <Link to='/' className='footerLink'>Банки</Link>
                <Link to='/' className='footerLink'>Калькулятор</Link>
              </div>
            </div>

          </div>
          <div className="right">
            <span className='h2'>Новостная рассылка</span>
            <p>Подпишитесь, чтобы получать обновления, доступ к эксклюзивным предложениям и многое другое</p>
            <span>Введите адрес электронной почты:</span>
            <input type="email" />
          </div>
        </div>

      </div>

    </footer>
  )
}
