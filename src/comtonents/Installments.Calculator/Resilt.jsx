import React from 'react'
import { useSelector } from 'react-redux/es/exports';
export default function Result({Term, Initial}) {
    const Bag=useSelector(s=>s.bag)
    const itemCart=useSelector(s=>s.itemCart)
    let total = 0 ;
    Bag.map(obj=>{
      total += (itemCart[obj.id-1].kg_price*obj.Quantity)
    })
  return (
    <div className='Result Fav-Ins-block'>
        <p className="h4">Результаты предварительного расчёта</p>
        <div className="ResiltMain">
            <p>
                <span>Сумма кредита</span>
                <span className='big'>51 605 сом</span>
            </p><hr />
            <p>
                <span>Первоначальный взнос</span>
                <span className='big'>20 сом</span>
            </p><hr />
            <p>
                <span>Срок кредита</span>
                <span className='big'>3 месяца</span>
            </p><hr />
            <p>
                <span>Ежемесячный платеж</span>
                <span className='big'>18 066 сом</span>
            </p><hr />
            <p>
                <span>Общая выплата</span>
                <span className='big'>54 218 сом</span>
            </p><hr />
            <p>
                <span>Наценка</span>
                <span className='big'>2 593сом</span>
            </p><hr />
            <p>
                <span>Сумма кредита</span>
                <span className='big'>51 625сом</span>
            </p><hr />
        </div>
        <input type="submit" value="Заполнить заявку" />
    </div>
  )
}
