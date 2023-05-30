import React from 'react'

export default function Checkboxes() {
  return (
    <div className='Checkboxes'>
        <p className='h4'>Способ оплаты</p>
        <div className='PaymentMain'>
            {/* Наличными */}
              <input name='Payment' id='Payment_1' type="radio" />
              <label htmlFor="Payment_1">Наличными</label>
            {/* Наличными */}

            {/* Денежный перевод */}
              <input name='Payment' id='Payment_2' type="radio" />
              <label htmlFor="Payment_2">Денежный перевод</label>
            {/* Денежный перевод */}

            {/* Банковский перевод */}
              <input name='Payment' id='Payment_3' type="radio" />
              <label htmlFor="Payment_3">Банковский перевод</label>
            {/* Банковский перевод */}

            {/* Оплата курьеру на месте */}
              <input name='Payment' id='Payment_4' type="radio" />
              <label htmlFor="Payment_4">Оплата курьеру на месте</label>
            {/* Оплата курьеру на месте */}

            {/* Оплата картой, электронными кошельками на сайте */}
              <input name='Payment' id='Payment_5' type="radio" />
              <label htmlFor="Payment_5">Оплата картой, электронными кошельками на сайте</label>
            {/* Оплата картой, электронными кошельками на сайте */}

        </div>
    </div>
  )
}
