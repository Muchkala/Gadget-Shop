import React from 'react'
import './CScenterLine.scss'
import { Row } from 'react-bootstrap'

export default function CScenterLine({getPrices}) {
  return (
    <Row className='CScenterLineRow' style={{height: '200px'}}>
        <div className="CSCLleft">
            <button className='CSCLLbutton'>Продолжить покупки</button>
        </div>
        <div className="CSCright">
            <h4 className='CSCRh4'>{getPrices}<span>грн.</span></h4>
            <button className='CSCLRbutton'>ОФОРМИТЬ ЗАКАЗ</button>
        </div>
    </Row>
  )
}
