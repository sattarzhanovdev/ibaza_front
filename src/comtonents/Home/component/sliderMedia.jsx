import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import linkImg from '../../../images/linkImg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SliderMedia() {
    const itemCart = useSelector(i=>i.itemCart)
    let iphones =itemCart.map(obj=>{
        if(obj.title == 'iPhone 14' || obj.title == 'iPhone 14 Pro'){
            return obj
        }
    })
    iphones=iphones.filter(el=>{
        return (el != null && el != "" || el === 0);
    })
  return (
    <div className='SliderMedia'>
        <div className="block">
            <h1>ВЫБЕРИ СВОЙ <br /> iPHONE</h1>
            <div className='class'>
                <Carousel>
                    {iphones.map((i,index)=>
                    <Carousel.Item key={index}>
                        <div className="image">
                            <img src={index == 0?linkImg.iPhone14:linkImg.iPhone14Pro} alt="" />
                            <Link to={`/Catalog/Details/${i.id}`} >{i.title}</Link>
                        </div>
                    </Carousel.Item>
                    )}
                </Carousel>
            </div>
            <Link to='/Catalog' className='info'>Посмотреть все</Link>
        </div>
    </div>
  )
}
