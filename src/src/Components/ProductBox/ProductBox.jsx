import React from 'react'
import './ProductBox.scss'
import { PiScalesBold } from 'react-icons/pi'
import { FaRegHeart } from 'react-icons/fa'
import { Col } from 'react-bootstrap'

export default function ProductBox( {data}) {
  return (
    <div className='ProductBoxDiv'>
    {
      data.map(({id, img, noviy, fullName, comment, saleCost, realCost})=>{
      return  <Col key={id}  xl={2} lg={3} md={4} style={{justifyContent:'center', justifyItems:'center'}}>
        <div key={id} className='ProductBox'>
        <div key={id} className="boxTop">
          {noviy && <div className="novinka">Новинка</div>} 
          <span><PiScalesBold/> <FaRegHeart/> </span>
          </div>
        <img src={img} alt="" />
        <p className='ProductFullName'>{fullName}</p>
        <div className="ratingComment">
          <div className="stars"></div><span>Отзывов: {comment}</span></div>
        <div className="buyPrd">
          <div className="costDad">
            <div className="cost"><div className="skidka">{!noviy && <p style={{color:'gray'}}>{!noviy && realCost}</p>}</div>
            {noviy ? <div className="realCost" style={{color:'rgba(6, 15, 66, 1)'}}>{ noviy ? realCost : saleCost}<span style={{color:'rgba(6, 15, 66, 1)'}}>грн.</span> </div>
             : <div className="realCost">{ noviy ? realCost : saleCost}<span>грн.</span> </div>}
            </div>
            <button>КУПИТЬ</button>
          </div>
        </div>
        </div>
        </Col>
})
    }
    </div>
  )
}
