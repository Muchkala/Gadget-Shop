import React from 'react'
import './UniTitle.scss'
import { Row } from 'react-bootstrap'

export default function UniTitle({text}) {
  return (
    <Row className='UniTitleRow' style={{textAlign:'left'}}>
        <h2 className="UniTitle">
            {text}
        </h2>
    </Row>  
)}
