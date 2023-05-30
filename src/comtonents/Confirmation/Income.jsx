import React, { useState } from 'react'
import linkImg from '../../images/linkImg'

export default function Income() {
    const [CountrySelection, setCountrySelection]=useState(false)
    function activeCountrySelection(){setCountrySelection(!CountrySelection)}
    const [CountrySelectionActive, setCountrySelectionActive] = useState('Продленный действующий патент ');
    const countries=[
        'Продленный действующий патент ',
        'Продленный действующий патент ',
    ]
    function activeCountrySelectionbtn(item){
        setCountrySelectionActive(item.target.innerHTML)
        console.log(item.target.innerHTML);
        activeCountrySelection();
    }
  return (
    <div className='Income'>
        <p className="h4">Данные о доходах</p>
        
        <div className='IncomeMain'>
            <div className={`CountrySelectionMedia ${CountrySelection?"":"active"}`}>
                <div className="CountrySelectionBlockMedia">
                    <button onClick={activeCountrySelection} className={`button ${CountrySelection?"active":""}`}>
                        {CountrySelectionActive} 
                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.71667 4.36667C3.62778 4.36667 3.54178 4.35 3.45867 4.31667C3.37511 4.28333 3.30556 4.23889 3.25 4.18333L0.183333 1.11667C0.0611109 0.994445 0 0.838889 0 0.65C0 0.461111 0.0611109 0.305555 0.183333 0.183333C0.305555 0.0611109 0.461111 0 0.65 0C0.838889 0 0.994445 0.0611109 1.11667 0.183333L3.71667 2.78333L6.31667 0.183333C6.43889 0.0611109 6.59444 0 6.78333 0C6.97222 0 7.12778 0.0611109 7.25 0.183333C7.37222 0.305555 7.43333 0.461111 7.43333 0.65C7.43333 0.838889 7.37222 0.994445 7.25 1.11667L4.18333 4.18333C4.11667 4.25 4.04444 4.29711 3.96667 4.32467C3.88889 4.35267 3.80556 4.36667 3.71667 4.36667Z" fill="black"/>
                        </svg>
                    </button>
                    <div className={`showElementMedia ${CountrySelection?"":"active"}`}>
                        <div className="div">
                            {countries.map((item, index)=>
                                <button key={index} country={item} onClick={activeCountrySelectionbtn}>
                                    {item}
                                </button>    
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <input type="file" name="PaymentMain" id='fileIncome' />
            <label htmlFor="fileIncome">Загрузить лицевую сторону паспорта <img src={linkImg.Download} alt="" /></label>

        </div>
        <div className="endl">
            <input type="checkbox" name="" id="in_end" />
            <label htmlFor="in_end">За неисполнение или ненадлежащее исполнение обязательств, предусмотренных настоящим Договором Стороны несут ответственность в соответствии с настоящим Договором и внутренними нормативными документами Банка, в случаях непредусмотренных ими - установленную действующим законодательством Кыргызской Республики. <a href="#">еще</a></label>
            <input type="submit" value="Отправить заявку" />
        </div>
    </div>
  )
}
