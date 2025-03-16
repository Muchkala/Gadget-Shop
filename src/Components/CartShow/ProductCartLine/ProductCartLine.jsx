import React, { useState } from 'react';
import './ProductCartLine.scss';
import { Row } from 'react-bootstrap';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function ProductCartLine({ fullName, img, saleCost }) {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(saleCost);

  const handleCountPlus = () => {
    setCount(count + 1);
    setTotalPrice((count + 1) * saleCost);
  };

  const handleCountMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice((count - 1) * saleCost);
    }
  };


  const [activeLine , setActiveLine] = useState(false)
  const handleActiveLine = () => {
    setActiveLine((prev) => !prev)
  }



  return (
    <Row className={ activeLine ? 'd-none' : "ProductCartLineRow"} >
      <div className="leftInfoCart">
        <img src={img} alt={fullName} />
        <p className="LICp">{fullName}</p>
      </div>
      <div className="rightInfoCart">
        <div className="RICcount">
          <button onClick={handleCountMinus}><FiMinus /></button>
          <span>{count}</span>
          <button onClick={handleCountPlus}><FiPlus /></button>
        </div>
        <div className="RICcost">{totalPrice} <span className='RICCs'>грн.</span></div>
        <button className='RICtrashC'>
          <FaRegTrashAlt onClick={handleActiveLine}/>
        </button>
      </div>
    </Row>
  );
}

