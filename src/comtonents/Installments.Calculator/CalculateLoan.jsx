import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux';

function CalculateLoan() {

    const [CountrySelectionFirst, setCountrySelectionFirst]=useState(false)
    const [CountrySelectionSecond, setCountrySelectionSecond]=useState(false)
    function activeCountrySelectionFirst(){setCountrySelectionFirst(!CountrySelectionFirst)}
    function activeCountrySelectionSecond(){setCountrySelectionSecond(!CountrySelectionSecond)}
    const [CountrySelectionActiveFirst, setCountrySelectionActiveFirst] = useState('Онлайн');
    const [CountrySelectionActiveSecond, setCountrySelectionActiveSecond] = useState('DOSCREDOBANK');
    const countriesFirst=[
        'Онлайн',
        'Онлайн',
    ]
    const countriesSecond=[
        'DOSCREDOBANK',
        'DOSCREDOBANK',
    ]
    
    function activeCountrySelectionbtnFirst(item){
        setCountrySelectionActiveFirst(item.target.innerHTML)
        console.log(item.target.innerHTML);
        activeCountrySelectionFirst();
    }
    function activeCountrySelectionbtnSecond(item){
        setCountrySelectionActiveSecond(item.target.innerHTML)
        console.log(item.target.innerHTML);
        activeCountrySelectionSecond();
    }
  return (
    <></>
  )
}
export default (CalculateLoan)