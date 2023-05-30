import React, { useState } from 'react'

import itemCart from '../DataBase/itemCart';
import Checkboxes from '../comtonents/Ordering/Checkboxes';
import ContactDetails from '../comtonents/Ordering/ContactDetails';
import Address from '../comtonents/Ordering/Address';
import YourOrder from '../comtonents/Ordering/YourOrder';
import CommentTo from '../comtonents/Ordering/CommentTo';
import Total from '../comtonents/Ordering/Total';

export default function Ordering() {

    return (
        <div className='Ordering'>
            <div className="Ssylka">
                <div className="block">
                    <p>Главная страница  / Оформление заказа  </p>
                </div>
            </div>
            <div className="block">
                <h1>Оформление заказа</h1>
                <Checkboxes/> 
                <ContactDetails/>
                <Address />
                <YourOrder />
                <CommentTo/>
                <Total/>

            </div>
      </div>
    )
}
