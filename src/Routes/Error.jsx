import React from 'react'
import linkImg from '../images/linkImg'

export default function Error() {
  return (
    <div className='Error'>
        <div className="Ssylka">
            <div className="block">
                <p>Главная страница / Ошибка</p>
            </div>
        </div>
        <div className="block">
            <div className="ErrorMain">
                <p>Страница не существует</p>
                <span className="ErrorTipe">404</span>
                <img src={linkImg.Error} alt="" />
            </div>
        </div>
    </div>
  )
}
