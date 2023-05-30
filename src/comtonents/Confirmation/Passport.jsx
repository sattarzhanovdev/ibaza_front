import React from 'react'
import linkImg from '../../images/linkImg'

export default function Passport() {
  return (
    <div className='Passport'>
        <p className="h4">Паспортные данные</p>
        <div className='PaymentMain'>
            {/* ID паспорт */}
              <input name='PaymentMain' id='Payment_1' type="radio" />
              <label htmlFor="Payment_1">ID паспорт</label>
            {/* ID паспорт */}

            {/* Биометрический паспорт */}
              <input name='PaymentMain' id='Payment_2' type="radio" />
              <label htmlFor="Payment_2">Биометрический паспорт</label>
            {/* Биометрический паспорт */}

            {/* Загрузить лицевую сторону паспорта */}
              <input type="file" name="PaymentMain" id='fileFirst' />
              <label htmlFor="fileFirst">Загрузить лицевую сторону паспорта <img src={linkImg.Download} alt="" /></label>
            {/* Загрузить лицевую сторону паспорта */}

            {/* Загрузить заднюю сторону паспорта */}
              <input type="file" name="PaymentMain" id='fileSecond' />
              <label htmlFor="fileSecond">Загрузить заднюю сторону паспорта <img src={linkImg.Download} alt="" /></label>
            {/* Загрузить заднюю сторону паспорта */}

            {/* Загрузить справку с места жительства */}
              <input type="file" name="PaymentMain" id='fileThree' />
              <label className='fileThree' htmlFor="fileThree">Загрузить справку с места жительства <img src={linkImg.Download} alt="" /></label>
            {/* Загрузить справку с места жительства */}
        </div>
    </div>
  )
}
