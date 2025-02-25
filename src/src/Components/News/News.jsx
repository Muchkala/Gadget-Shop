import React from 'react'
import './News.scss'
import { Col, Container, Row } from 'react-bootstrap'
import UniTitle from '../UniTitle/UniTitle'
import UniMiniLink from '../UniTitle/UniMiniLink/UniMiniLink'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { newsData } from '../../Constants/data'

export default function News() {
  return (
     <Container className='News'>
        <UniTitle text={'Партнеры'}/>
        <Row>
         {
            newsData.map(({id, newsTitle, newsText , date , img}) =>{
      return   <Col lg={3} key={id}>
                  <div className="newsBox">
                     <img src={img} alt="" />
                     <div className="newsContent">
                        <h4 className="newsTitle">{newsTitle}</h4>
                        <p className='newsText'>{newsText}</p>
                        <div className="newsDateMore">
                           <p className="date">{date}</p>
                           <Link className='newsBoxMore'>Читать полностью <BsArrowRight/></Link>
                        </div>   
                     </div>
                  </div>
               </Col>
            })
         }
        </Row>
        <UniMiniLink text={"Все новости"}/>
     </Container>
  )
}
