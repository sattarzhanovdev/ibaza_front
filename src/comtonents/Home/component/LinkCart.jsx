import React from 'react'

export default function LinkCart({ img, title, className }) {
  return (
    <div className={`LinkCart ${className}`}>
        <img className='img' src={img} alt="" />
        <img className='title' src={title} alt="" />
    </div>
  )
}
