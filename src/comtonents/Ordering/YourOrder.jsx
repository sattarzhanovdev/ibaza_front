import React from 'react'
import Quantity from './YourOrder/Quantity';
import linkImg from '../../images/linkImg';
import { useSelector } from 'react-redux';
export default function YourOrder() {
    const itemCart = useSelector(s=>(s.itemCart))  
    const Bag = useSelector(s=>(s.bag))  

    return (
        <div className='YourOrderMain'>
            <p className="h4">Ваш заказ</p>
            <div className='YourOrder'>
                {Bag.map((i,index) =>

                    <div key={index} className='itemCart'>

                        <div className="img"><img src={itemCart[i.id-1].img} alt="" /></div>

                        <div className='titleOther'>
                            <div className="title">{itemCart[i.id-1].title}</div>
                        </div>
                        
                        <Quantity quantity={i.Quantity}/>

                        <p className="price">
                            <span className='usd'>${itemCart[i.id-1].usa_price}</span>
                            <span className='som'>{itemCart[i.id-1].kg_price} сом</span>
                        </p>

                        <button className='delete'><img src={linkImg.Dlelete} alt="" /></button>

                    </div>

                )}
            </div>
        </div>
    )
}