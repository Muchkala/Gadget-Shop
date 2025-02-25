import React, { Component } from "react";
import Slider from "react-slick";
import './AutoPlay.scss'
import HederImg1 from '../../Assets/Img/HederImg1.png'
import HederImg2 from '../../Assets/Img/HederImg2.png'
import HederImg3 from '../../Assets/Img/HederImg3.png'
import HederImg4 from '../../Assets/Img/HederImg4.png'
import HederImg5 from '../../Assets/Img/HederImg5.png'
import HederImg6 from '../../Assets/Img/HederImg6.png'
import HederImg7 from '../../Assets/Img/HederImg7.png'

 function AutoPlay() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="HederBox">
            <img src={HederImg1} alt="" />                        
            <p className="HdrP"> Бесплатная  сборка</p>
          </div>
        </div>
        <div>
          <div className="HederBox">
            <img src={HederImg2} alt="" />                                 
            <p className="HdrP"> Рассрочка 4 без переплат</p>
          </div>
        </div>
        <div>
          <div className="HederBox">
            <img src={HederImg3} alt="" />                         
            <p className="HdrP"> Бесплатная  доставка</p>
          </div>
        </div>
        <div>
          <div className="HederBox">
            <img src={HederImg4} alt="" />                         
            <p className="HdrP"> Официальная гарантия</p>
          </div>
        </div>
        <div>
          <div className="HederBox">
            <img src={HederImg5} alt="" />                         
            <p className="HdrP"> Лучшая цена </p>
          </div>
        </div>
        <div>
          <div className="HederBox">
            <img src={HederImg6} alt="" />                    
            <p className="HdrP"> 11 лет  на рынке</p>
          </div>
        </div>
        <div>
          <div className="HederBox">
            <img src={HederImg7} alt="" />                              
            <p className="HdrP"> Профессиональная консультация</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
