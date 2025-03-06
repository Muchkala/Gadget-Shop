import React from 'react'
import './Footer.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { footerData, footerIcons } from '../../../Constants/data'
import { Link } from 'react-router-dom'
import whiteNavImg from '../../../Assets/Img/WhiteNavLogo.png'
import { LiaTelegramPlane } from 'react-icons/lia'
import FTRbtm1 from '../../../Assets/Img/footerBottom1.png'
import FTRbtm2 from '../../../Assets/Img/footerBottom2.png'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row style={{ justifyContent: 'center' }}>
          <Col lg={10} style={{ display: 'flex', justifyContent: 'space-between' }}>
            {footerData.map(({ id, ul1, lis }) => (
              <Col lg={2} >
                <h4 >{ul1}</h4>
                <ul >
                  {lis.map(({ id, li }) => (
                    <Link><li key={id}>{li}</li></Link>
                  ))}
                </ul>
              </Col>
            ))}
            <Col lg='3'>
            <h4>Следите за нами</h4>
            <ul style={{display:'flex', justifyContent:'space-between'}}>
                {footerIcons.map(({id, img})=>(
                     <Link><li style={{width:'min-content'}} key={id}><img src={img} alt="" /></li></Link>
                ))}
            </ul>
            <h4>Подписывайтесь на скидки</h4>
            <div className="inp">
                <button> <LiaTelegramPlane /> </button>
                <input placeholder='Укажите ваш email...' type="text" />
            </div>
            </Col>
          </Col>
          <Col lg={10}>
          <div className="bottomFtr">
            <Col lg={6} className="leftBtmF">
                <img src={whiteNavImg} alt="" />
                <p>2008-2021 Интернет-магазин v-comp.com.ua
                Все права защищены</p>
            </Col>
            <Col lg={1} className="rightBtmF">
                <div className="FRbox">
                    <img src={FTRbtm1} alt="" />
                    <img src={FTRbtm2} alt="" />
                </div>
            </Col>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
