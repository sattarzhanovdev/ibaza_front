import React,{useState, useEffect} from 'react';
// import MySlider from '../comtonents/Catalog/MySlider';
import { Link } from 'react-router-dom';
const CatalogCarousel = ({itemCart}) => {

  const [ActiveItem, setActiveItem] = useState(0);
    const items = itemCart
    let quantityItem=14
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
        quantityItem = 14
      }
      else if(windowWidth<700){
        quantityItem = 6
      }
      else if(windowWidth<900){
        quantityItem = 7
      }
      else if(windowWidth<1050){
        quantityItem = 8
      }
      else if(windowWidth<1300){
        quantityItem = 11
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
        return  <div key={index} className={`itemCart ${index == 0 ? 'first':''}`}>
                  <Link to={`/Catalog/Details/${item.id}`}>
                    <div className="img">
                        <img src={item.img} alt="" />
                    </div>
                    <h3>{item.title}</h3>
                    <div className="pishka">
                      <p>{item.usa_price}$</p>
                      <p>{item.kg_price} сом</p>
                    </div>
                    <span className={item.stock?"active":""}>{item.stock?"В наличии":"Нет в наличии"}</span>
                  </Link>
                </div>
      });
      return <div key={index} className={`wrap ${index === ActiveItem ? "active" : ""}`}> {carouselGroup} </div>;
    });
    return <div className='carouselItems'>
          <div className='carouselItems'>{carouselItems}</div>
          <div className='activeControl'>
            <button className='activeControl_1' onClick={setActiveMinus}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#0000FF"/>
                <path d="M42.5303 28.5303C42.8232 28.2374 42.8232 27.7626 42.5303 27.4697L37.7574 22.6967C37.4645 22.4038 36.9896 22.4038 36.6967 22.6967C36.4038 22.9896 36.4038 23.4645 36.6967 23.7574L40.9393 28L36.6967 32.2426C36.4038 32.5355 36.4038 33.0104 36.6967 33.3033C36.9896 33.5962 37.4645 33.5962 37.7574 33.3033L42.5303 28.5303ZM10 28.75H42V27.25H10V28.75Z" fill="white"/>
              </svg>
            </button>
            <button className='activeControl_2' onClick={setActivePlus}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#0000FF"/>
                <path d="M42.5303 28.5303C42.8232 28.2374 42.8232 27.7626 42.5303 27.4697L37.7574 22.6967C37.4645 22.4038 36.9896 22.4038 36.6967 22.6967C36.4038 22.9896 36.4038 23.4645 36.6967 23.7574L40.9393 28L36.6967 32.2426C36.4038 32.5355 36.4038 33.0104 36.6967 33.3033C36.9896 33.5962 37.4645 33.5962 37.7574 33.3033L42.5303 28.5303ZM10 28.75H42V27.25H10V28.75Z" fill="white"/>
              </svg>
            </button>
          </div>
      </div>;
  };


export default CatalogCarousel;