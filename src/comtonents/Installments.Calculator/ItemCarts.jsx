import React from 'react'
import { useSelector } from 'react-redux';

export default function ItemCarts() {
    const itemCart = useSelector(s=>(s.itemCart))  
    const Bag = useSelector(s=>(s.bag))  

    return (
        <div className='ItemCarts Fav-Ins-block'>
            {Bag.map((obj, index)=>
                <div key={index} className='itemCart'>
                    <div className="img">
                        <img src={itemCart[obj.id-1].img} alt="" />
                    </div>
                    <div className="itemCartLeft">
                        <button>Изменить</button>
                        <p className='h4'>{itemCart[obj.id-1].title}</p>
                        <div>
                            <p>Цена $: {itemCart[obj.id-1].usa_price}</p>
                            <p>Цена сом: {itemCart[obj.id-1].kg_price}</p>
                            <p>Цвет: {obj.Color}</p>
                            <p>Память: {obj.Memory} gb</p>
                        </div>
                    </div>
                    {/* {itemCart[obj].id} */}

                </div>    
            )}
        </div>
    )
}
