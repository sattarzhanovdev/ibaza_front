import React from 'react'

export default function Total() {
  return (
    <div className='Total'>
        <div className="TotalMain">
            <div className="TotalBlock">
                <p className="h4">Итого:</p>
                <ol>
                    <li>1 товар на сумму <span>$590</span></li>
                </ol>
                <div className='ToPay'>
                    <div className="div">К оплате</div>
                    <div>
                        <p className='som'>51 625 сом</p>
                        <p>$590. 00</p>
                    </div>
                </div>
                <button>Подтвердить заказ</button>
                <p>Подтверждая заказ, я <br /> принимаю условия <br /><a href="#">пользовательского соглашения</a></p>

            </div>

        </div>
    </div>
  )
}
