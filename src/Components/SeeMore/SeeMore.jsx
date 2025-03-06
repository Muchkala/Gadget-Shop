import React from 'react'
import './SeeMore.scss'
import { Col, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

export default function SeeMore({blue}) {
  return (
    <Row className='seeMoreRow'>
      <Col lg={2} style={{textAlign:'right'}}>

       {
       blue ? <p className="seeMoree" style={{color:'#01579B'}}>Смотреть все товары <span> <BsArrowRight/> </span></p> : 
       <p className="seeMoree" style={{color: 'white'}} >Смотреть все товары <span> <BsArrowRight/> </span></p>
      } 
      </Col>
    </Row>
  )
}