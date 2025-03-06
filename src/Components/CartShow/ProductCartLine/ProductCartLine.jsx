import React, { useState, useEffect } from 'react'
import './ProductCartLine.scss'
import { Row } from 'react-bootstrap'
import ProductImg5 from '../../../Assets/Img/ProductCartImg5.png';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function ProductCartLine({ index, updatePrice }) {  

  const [count, setCount] = useState(1);
  const [risCount, setRisCount] = useState(3600);

  const handleCountPlus = () => {
    setCount(count + 1);
    setRisCount((count + 1) * 3600);
  };

  const handleCountMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      setRisCount((count - 1) * 3600);
    }
  };

  useEffect(() => {
    updatePrice(index, risCount); // Update price in parent component whenever risCount changes
  }, [risCount]);

  return (
    <Row className={risCount === 0 ? 'd-none' : "ProductCartLineRow"} >
      <div className="leftInfoCart">
        <img src={ProductImg5} alt="product" />
        <p className="LICp">Процессор Intel Core i5-10400F, Box (BX70110400F) (BX8070110400F)</p>
      </div>
      <div className="rightInfoCart">
          <div className="RICcount">
            <button onClick={handleCountMinus}><FiMinus /></button>
            <span>{count}</span>
            <button onClick={handleCountPlus}><FiPlus /></button>
          </div>
          <div className="RICcost">{risCount}<span className='RICCs'>грн.</span></div>
          <button onClick={() => { setRisCount(0); updatePrice(index, 0); }} className='RICtrashC'>
            <FaRegTrashAlt />
          </button>
      </div>
    </Row>
  )
}
