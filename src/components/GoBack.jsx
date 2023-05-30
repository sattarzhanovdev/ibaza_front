import React from 'react'
import { useNavigate } from 'react-router-dom'


const GoBack = () => {
    const navigate = useNavigate();
    
    const goBack = ()=> navigate(-1)
  return (
    <button className='Editpost__btn' onClick={goBack}>Go Back</button>
  )
}

export  {GoBack}