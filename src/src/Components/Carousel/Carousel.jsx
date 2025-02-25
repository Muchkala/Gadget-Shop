import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss"; // Add a custom stylesheet for styling
import CaruselBgImg from '../../Assets/Img/CarouselBG.jpg'

export default function Carousel() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3600,
    arrows: true,
  };
  

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <div className="TxtContent">
            <h2>TEXT BANNER</h2>
            <p>BANNER DESCRIPTION SMALL TEXT</p>
            <button>BANNER BUTTON</button>
          </div>
          <img src={CaruselBgImg} alt="" />
        </div>
        <div className="carousel-slide">
          <div className="TxtContent">
            <h2>TEXT BANNER</h2>
            <p>BANNER DESCRIPTION SMALL TEXT</p>
            <button>BANNER BUTTON</button>
          </div>
          <img src={CaruselBgImg} alt="" />
        </div>
        <div className="carousel-slide">
          <div className="TxtContent">
            <h2>TEXT BANNER</h2>
            <p>BANNER DESCRIPTION SMALL TEXT</p>
            <button>BANNER BUTTON</button>
          </div>
          <img src={CaruselBgImg} alt="" />
        </div>
        <div className="carousel-slide">
          <div className="TxtContent">
            <h2>TEXT BANNER</h2>
            <p>BANNER DESCRIPTION SMALL TEXT</p>
            <button>BANNER BUTTON</button>
          </div>
          <img src={CaruselBgImg} alt="" />
        </div>
        <div className="carousel-slide">
          <div className="TxtContent">
            <h2>TEXT BANNER</h2>
            <p>BANNER DESCRIPTION SMALL TEXT</p>
            <button>BANNER BUTTON</button>
          </div>
          <img src={CaruselBgImg} alt="" />
        </div>
        <div className="carousel-slide">
          <div className="TxtContent">
            <h2>TEXT BANNER</h2>
            <p>BANNER DESCRIPTION SMALL TEXT</p>
            <button>BANNER BUTTON</button>
          </div>
          <img src={CaruselBgImg} alt="" />
        </div>
      </Slider>
    </div>
  );
}
