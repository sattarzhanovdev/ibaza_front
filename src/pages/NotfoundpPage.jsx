import React from 'react'
import { Link } from 'react-router-dom'

const NotfoundpPage = () => {
  return (
    <div>
        <h1>страница не найдена !</h1>
       <p>пожалуста вернитесь к <Link to="/">Главной странице</Link></p> 
    </div>
  )
}

export default NotfoundpPage