import React from 'react'
import './UniMiniLink.scss'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

export default function UniMiniLink({text}) {

  return (
    <Row className='miniLink'>
       <Link style={{color:'rgb(7, 80, 135)'}}>{text} <BsArrowRight/></Link> 
    </Row>
  )
}
