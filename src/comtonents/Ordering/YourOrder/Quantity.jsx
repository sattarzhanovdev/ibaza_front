import React, { useState } from 'react'

export default function Quantity({quantity}) {
    const [MeaningQuantity,setMeaningQuantity]=useState(quantity)
    function Decrement(){
        if(MeaningQuantity>1){
            setMeaningQuantity(MeaningQuantity-1)
        }
    }
    function Increment(){
        setMeaningQuantity(MeaningQuantity+1)
    }
    return (
      <div className='Quantity'>
          <button onClick={Increment}>+</button>
          <span className="QuantityNum">{MeaningQuantity}</span>
          <button onClick={Decrement}>-</button>
      </div>
    )
}
