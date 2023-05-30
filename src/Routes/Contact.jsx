import React from 'react'

export default function Contact() {
  return (
    <div className='Contact'>
        <div className="Ssylka">
          <div className="block">
              <p>Главная страница / Контакты</p>
          </div>
      </div>
        <div className="block">
            <h1>Контакты</h1>
            <div className="ContactMain">
                <div className="mainLeft">
                    <div className="mapMain">
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.2975463543635!2d72.8044847974591!3d40.53501499260035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac027009e9f5%3A0x98a29b807ad280ff!2zNTAg0J_RgC4g0JzQsNGB0LDQu9C40LXQstCwLCDQntGIIDcyMzUwMA!5e0!3m2!1sru!2skg!4v1684004560038!5m2!1sru!2skg" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
                <div className="mainRight">
                    <div className="mainRightTop">
                        <h3>Телефон</h3>
                        <p>+996 505 900 030</p>
                        <h3>Instagram</h3>
                        <p>@baza.osh</p>
                        <h3>Адрес</h3>
                        <p>г. Ош, ул. Масалиева 50Б (ориентир Макаренко)</p>
                        <h3>График работы</h3>
                        <p>с 10:00 до 18:00</p>

                    </div>
                    <div className="form">
                        <input type="email" placeholder="Ваш Email" name="Form" id="email" />
                        <input name="Form" type="text"  placeholder="Ваше Имя" />
                        <div className="textarea">
                            <textarea placeholder="Сообщение" name="Form" id="" cols="30" rows="10"></textarea>
                            <input type="submit" name="Form" value="Отправить" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
