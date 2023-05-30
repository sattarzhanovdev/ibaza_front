import React from 'react'

export default function ContactDetails() {
  return (
    <div className='ContactDetails'>
        <p className='h4'>Ваши контактные данные</p>
        <div>
            <input type="text" placeholder='Имя'/>
            <input type="text" placeholder='Фамилия'/>
            <input type="tel" placeholder='Телефон'/>
            <input type="email" placeholder='Email'/>
        </div>
    </div>
  )
}
