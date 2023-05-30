import React from 'react'
import { useSelector } from 'react-redux'
import Income from '../comtonents/Confirmation/Income'
import Passport from '../comtonents/Confirmation/Passport'
import linkImg from '../images/linkImg'

export default function Confirmation() {
    const Bag = useSelector(s=>(s.bag))  
    const itemCart = useSelector(s=>(s.itemCart))  

  return (
    <div className='Confirmation'>
        <div className="Ssylka">
            <div className="block">
                <p>Главная страница  /  Подтверждение заказа</p>
            </div>
        </div>
        <div className="block ConfirmationBlock">
            <h1>Покупка в рассрочку</h1>
            <div className="ConfirmationLeft">
                <div className="itemCarts">
                {Bag.map((i, index) =>

                    <div key={index} className='itemCart'>
                        <div className="img"><img src={itemCart[i.id-1].img} alt="" /></div>

                        <div className="itemCartLeft">
                            <p className="h4">{itemCart[i.id-1].title}</p>
                            <div className='price'>
                                <p>Цена устройства</p>
                                <span className='usd'>$ {itemCart[i.id-1].usa_price}</span>
                                <div className="som">{itemCart[i.id-1].kg_price} сом</div>
                            </div>
                            <div className="term">
                                <p>Срок кредита</p>
                                <span>на 3 месяца(ев)</span>
                            </div>
                        </div>
                    </div>

                )}
                </div>

            </div>
            <div className="ConfirmationRight"> 
                <div className="ConfirmationBlock">
                    <p className="h4">Заполнить заявку</p>
                    <p>Пожалуйста, заполните все поля для подтверждения вашего заказа</p>
                    <div className="inputs">
                        <input placeholder='Имя' type="text" name="Confirm"/>
                        <input placeholder='Фамилия' type="text" name="Confirm"/>
                        <input placeholder='Номер телефона' type="tel" name="Confirm"/>
                        <input placeholder='Email' type="email" name="Confirm"/>
                    </div>
                    <Passport/>
                    <Income/>
                </div> 

            </div>

        </div>
    </div>
  )
}
