import React from 'react'
import './InstagramPart.scss'
import { Col } from 'react-bootstrap'
import InstaImg1 from '../../Assets/Img/CommentIMG1.png'
import InstaImg2 from '../../Assets/Img/CommentIMG2.png'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'

const InstagramPart = ()=> {
  return (
     <Col lg={7} className='InstagramPart'>
        <h2 className='comUniH2'>Инстаграм</h2>
        <div className="InstaImgs">
            <img src={InstaImg1} alt="" />
            <img src={InstaImg2} alt="" />
            <img src={InstaImg1} alt="" />
            <img src={InstaImg2} alt="" />
            <img src={InstaImg1} alt="" />
            <img src={InstaImg2} alt="" />
        </div>
        <Link to={'/'} style={{width:'100%'}}>
            <p className="miniLink">Перейти <IoIosArrowRoundForward /></p>
        </Link>
     </Col>
  )
}
export default InstagramPart;