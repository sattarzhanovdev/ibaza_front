import React,{useState, useEffect} from 'react';
import itemCart from '../../DataBase/itemCart';
// import MySlider from '../comtonents/Catalog/MySlider';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
const WithBuy = () => {
  const itemCart = useSelector(s=>(s.itemCart))  

  const [ActiveItem, setActiveItem] = useState(0);
    const items = itemCart
    let quantityItem=4
    const [groups, setGroups] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let windowIndex = groups.length

    function setActivePlus(){
      if(ActiveItem < windowIndex-1){
        setActiveItem(ActiveItem+1)
      }
    }
    
    function setActiveMinus(){
      if(ActiveItem > 0){
        setActiveItem(ActiveItem-1)
      }
    }

    useEffect(() => {
  
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
  
      if(windowWidth>1300){
        quantityItem = 4
      }
      else if(windowWidth<900){
        quantityItem = 3
      }
      else if(windowWidth<1050){
        quantityItem = 2
      }
      else if(windowWidth<1300){
        quantityItem = 3
      }

      const groupedItems = items.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / quantityItem);
        if (!acc[groupIndex]) {
          acc[groupIndex] = [];
        }
        acc[groupIndex].push(item);
        return acc;
      }, []);
      setGroups(groupedItems);
    }, []);
    const carouselItems = groups.map((group, index) => {
      const carouselGroup = group.map((item, index) => {
          return  <Link key={index} to={`/Catalog/Details/${item.id}`}>
                    <div className={`itemCart`}>
                      <div className="img">
                        <img src={item.img} alt="" />
                      </div>
                      <p>{item.title}</p>
                      <span>{item.kg_price} сом</span>
                      <span>$ {item.usa_price}</span>
                    </div>
                  </Link> 
      });
      return <CarouselItem key={index}> <div className="wrap">{carouselGroup}</div></CarouselItem>;
    });
    return <Carousel  className='WithBuyCarousel'>{carouselItems}</Carousel>;
};


export default WithBuy;