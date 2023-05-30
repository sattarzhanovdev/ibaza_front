import React from 'react'

export default function BankTerms() {
  return (
    <div className='BankTerms Fav-Ins-block'>
        <p className='h4'>Условия банка</p>

        <hr />
        <div className="BankTermsMain">

            <div className="BankTermsBlock">
                <p>Сумма</p>
                <span className='h4'>1000-250000 сом</span>
            </div>
            <div className="BankTermsBlock">
                <p>Поручитель</p>
                <span className='h4'>требуется</span>
            </div>

            <hr />

            <div className="BankTermsBlock">
                <p>Первоначальный взнос</p>
                <span className='h4'>Первоначальный взнос</span>
            </div>
            <div className="BankTermsBlock">
                <p>Сроки кредитования</p>
                <span className='h4'>3-24 месяцев</span>
            </div>

            <hr />

            <div className="BankTermsBlock">
                <p>Сроки рассмотрения заявки</p>
                <span className='h4'>В течении часа</span>
            </div>
            <div className="BankTermsBlock">
                <p>Погашение</p>
                <span className='h4'>Равными частями</span>
            </div>
        </div>
    </div>
  )
}
