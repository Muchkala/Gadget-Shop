import React from 'react'
import './ShowWhere.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { LiaAngleRightSolid } from 'react-icons/lia'

export default function ShowWhere() {
  return (
    <div className="ShowWhere">
      <Container className='ShowWhereCON'>
        <Row className='showWhereRow'>
            <Col xs='auto' className='showWhereCol'>
                <p>Главная</p>
                <LiaAngleRightSolid />
                <p>Ноутбуки</p>
                <LiaAngleRightSolid />
                <p>Ноутбуки</p>
                <LiaAngleRightSolid />
                <p><span> Ноутбук Vinga Iron S140 Grey (S140-P50464GWP)</span></p> 
            </Col>
        </Row>
      </Container>
    </div>
  )
}
