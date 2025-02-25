import React, { Component } from 'react'
import './GamerProducts.scss'
import { Col, Row } from 'react-bootstrap'
import Slider from "react-slick";
import { GeymerData } from '../../Constants/data'

export default function GamerProducts() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,

  };

  return (
    <Row className='GamerRow'>

<div className="slider-container">
      <Slider {...settings}>
     {
          GeymerData.map(({id , img, nomi})=>{
      return <div key={id} className="GamerBox">
                <img src={img} alt="" />
                <p className='GamerP' style={{color:'black'}}>{nomi}</p>
              </div>
          })
      }
      </Slider>
    </div>
    </Row>
  )
}