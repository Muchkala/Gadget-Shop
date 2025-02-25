import React from 'react'
import './Navbar.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { HiBars3 } from 'react-icons/hi2'
import { LuUser } from 'react-icons/lu'
import navImg from '../../Assets/Img/WhiteNavLogo.png'
import { TfiAngleLeft } from 'react-icons/tfi'
import { useTheme } from '../../Constants/ThemeContent'
import { NavLinks } from '../../Constants/data'

export default function Navbar() {
  
  const { activeBar, handleActiveBar } = useTheme();

  return (
    <nav>
      <Container>
        <Row>
          <Col xs={1} sm={10} md={7} lg={6} xl={4}>
          <ul>
            <li  onClick={() =>handleActiveBar() } >{activeBar ?  <TfiAngleLeft /> :<HiBars3/>} </li>
            {
              NavLinks.map(({name, id})=>{ return <li key={id} className='unvsbl1'>{name}</li>})
            }
          </ul>
          </Col>
          <Col className='visibleImg' sm={2} xs={5}><img src={navImg} alt="" /></Col>
          <Col xs={4} sm={2} md={2} lg={2} xl={1} style={{justifyItems:'end'}}>
          <ul>
            <li className='language'><span>RU </span>/ UA</li>
            <li><LuUser /></li>
          </ul>
          </Col>
        </Row>
      </Container>
      </nav>
  )
}
