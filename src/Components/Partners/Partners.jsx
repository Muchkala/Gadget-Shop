import React from "react";
import Slider from "react-slick";
import UniTitle from "../UniTitle/UniTitle";
import './Partners.scss'
import { Container, Row } from "react-bootstrap";
import Partner1 from '../../Assets/Img/Partner1.png'
import Partner2 from '../../Assets/Img/Partner2.png'
import Partner3 from '../../Assets/Img/Partner3.png'
import Partner4 from '../../Assets/Img/Partner4.png'
import Partner5 from '../../Assets/Img/Partner5.png'
import UniMiniLink from "../UniTitle/UniMiniLink/UniMiniLink";

export default function Partners() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <Container className="Partners"> 
        <UniTitle text={'Партнеры'}/>
        <Row >
            <div className="slider-container">
                <Slider {...settings}>
                    
                    <img src={Partner1} alt="" />
                    
                    <img src={Partner2} alt="" />
                    
                    <img src={Partner3} alt="" />
                    
                    <img src={Partner4} alt="" />
                    
                    <img src={Partner5} alt="" />

                    <img src={Partner1} alt="" />
                    
                    <img src={Partner2} alt="" />
                    
                    <img src={Partner3} alt="" />
                    
                </Slider>
            </div>
        </Row>
        <UniMiniLink text={'Все партнеры'}/>
    </Container>
  )
}
