import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
const GroupedCarousel = ({itemCart}) => {
  const items = itemCart 
  let quantityItem=8
  const [groups, setGroups] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    if(windowWidth>1050){
      quantityItem = 8
    }
    else if(windowWidth<500){
      quantityItem = 3
    }
    else if(windowWidth<900){
      quantityItem = 6
    }
    else if(windowWidth<1050){
      quantityItem = 6
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
        return <Link key={index} className="itemCartOther" to={`/Catalog/Details/${item.id}`}>
                  <div className="itemCart">
                    <div className="img">
                        <img src={item.img} alt="" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.usa_price}$</p>
                    <p>{item.kg_price} сом</p>
                  </div>
                </Link> 
    });
    return <Carousel.Item key={index}><div className="wrap">{carouselGroup}</div></Carousel.Item>;
  });
  return <Carousel>{carouselItems}</Carousel>;
};

export default GroupedCarousel;