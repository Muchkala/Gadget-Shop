import React from 'react'
import './Header.scss'
import { Col, Container, Row } from 'react-bootstrap'
import LeftMenu from '../../../Components/LeftMenu/LeftMenu'
import Carousel from '../../../Components/Carousel/Carousel'
import AutoPlay from '../../../Components/AutoPlay/AutoPlay'

export default function Header() {
  return (
    <div className='Header'>
        <Container>
            <Row style={{justifyContent:'space-between'}}>
                <LeftMenu/>
                <Col lg={8}>
                <Carousel/>
                <AutoPlay/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}