import React from 'react'
import './ProductTabs.scss'
import { Col, Container, Row } from 'react-bootstrap'

export default function ProductTabs() {
  return (
    <div className='ProductTabs'>
        <Container>
            <Row className='tabsRow'>
                <Col lg={3}>
                    <ul className='tabsUL'>
                        <li>Все о товаре</li>
                        <li>Характеристики</li>
                        <li>Отзывы</li>
                        <li>Кредит</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
