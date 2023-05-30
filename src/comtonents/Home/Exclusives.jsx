import React from 'react'
import linkImg from '../../images/linkImg'
import Carousel from 'react-bootstrap/Carousel';

export default function Exclusives() {
  return (
    <div className='Exclusives'>
        <div className="block">
          <div className="left">
            <Carousel>
              <Carousel.Item>
                <div className="leftContent">
                  <h1>Эксклюзивы</h1>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  <div className="leftBottom">
                    <button>Подробнее</button>
                    <span>01/10</span>
                  </div>
                </div>

              </Carousel.Item>
              <Carousel.Item>
                <div className="leftContent">
                  <h1>Эксклюзивы</h1>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  <div className="leftBottom">
                    <button>Подробнее</button>
                    <span>01/10</span>
                  </div>
                </div>
              </Carousel.Item>

            </Carousel>
          </div>
          <div className="right">
            <img src={linkImg.ExclusivesBg} alt="" />
          </div>
        </div>
    </div>
  )
}
