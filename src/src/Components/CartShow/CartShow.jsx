import React, { useEffect, useState } from 'react'
import './CartShow.scss'
import { IoCloseOutline } from 'react-icons/io5'
import ProductCartLine from './ProductCartLine/ProductCartLine';
import { useTheme } from '../../Constants/ThemeContent';
import CScenterLine from './CScenterLine/CScenterLine';
import ProductBox from '../ProductBox/ProductBox';
import { PrdBxCartData } from '../../Constants/data';

export default function CartShow() {

  const [prices, setPrices] = useState([]);  // Store all product prices

  const updatePrice = (index, newPrice) => {
    setPrices((prevPrices) => {
      const updatedPrices = [...prevPrices];
      updatedPrices[index] = newPrice;
      return updatedPrices;
    });
  };

  const totalPrice = prices.reduce((sum, price) => sum + (price || 0), 0); // Sum all prices

  const { handleActiveCart } = useTheme();

  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

  return (
    <div className='BgCartShow' onClick={()=>handleActiveCart()}>
        <div className="CartShow" onClick={(e) => e.stopPropagation()}>
            <div className="nameClose align-items-center">
              <h5>Корзина</h5>
              <button onClick={()=>handleActiveCart()} className="close-btn"><IoCloseOutline /></button>
            </div>
            <div className="CartShowBody">
                {[0, 1, 2].map((index) => (
                  <ProductCartLine key={index} index={index} updatePrice={updatePrice} />
                ))}
            </div>
            <CScenterLine getPrices={totalPrice} />
            <h3 className='w-100'>С этим товаром покупают</h3>
            <div className="prdxCart">
              <ProductBox data={PrdBxCartData} />
            </div>
        </div>
    </div>
  )
}
