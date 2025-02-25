import React from 'react'
import './GameZoneLine.scss'
import { Col, Row } from 'react-bootstrap'

export default function GameZoneLine() {
  return (
      <Row>
        <Col lg={1}>
        <div className="line"></div>
        </Col>
        <Col lg={2}>
        <h2>GAME ZONE</h2>
        </Col>
        <Col lg={9}>
        <div className="line"></div>
        </Col>
      </Row>
  )
}
