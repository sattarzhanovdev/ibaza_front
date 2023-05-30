import React, { useState } from 'react'
import itemCart from '../DataBase/itemCart';
import Quantity from'../comtonents/Ordering/YourOrder/Quantity'
import YourOrder from '../comtonents/Ordering/YourOrder';
import { useSelector } from 'react-redux';

export default function Bag() {
  const itemCart = useSelector(s=>(s.itemCart))  
  const bag = useSelector(s=>(s.bag))  

  // let ItemCart = bag.map((item, index) => {
  // // const [quantity_item, setQuantity_item] = useState([])
  // // const carouselGroup = () => {
  // //     return  <div className={`itemCart`}>
  // //               lol
  // //             </div>
  // // };
  // return  <div key={index} className={`itemCart`}>
  //            <img src={itemCart[item.id-1].img} alt="" />
  //            <p className="h4">{itemCart[item.id-1].title}</p>
  //            <Quantity quantity={item.Quantity}/>
  //         </div>;
  // });
  return (
    <div className='Bag'>
      <div className="Ssylka">
        <div className="block">

            <p>Главная страница / Карзина</p>
        </div>
      </div>
      {/* {ItemCart} */}
      <div className="block">
        <div className="BagMain">
          <h1>Корзина</h1>
          <YourOrder />
          <div className="itog">
            <div>
              <p>Итого к оплате:</p>
              <p className='price'>
                <span className='som'>51 625 сом</span>
                <span className='usd'>$590. 00</span>
              </p>
            </div>
            <button>Оформить заказ</button>
          </div>

        </div>
      </div>
    </div>
  )
}
