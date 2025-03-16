import React, { useEffect } from 'react';
import './CartShow.scss';
import { IoCloseOutline } from 'react-icons/io5';
import ProductCartLine from './ProductCartLine/ProductCartLine';
import { useTheme } from '../../Constants/ThemeContent';
import CScenterLine from './CScenterLine/CScenterLine';
import ProductBox from '../ProductBox/ProductBox';
import { PrdBxCartData } from '../../Constants/data';

export default function CartShow() {
  const { handleActiveCart, clickedID } = useTheme(); // Ensure clickedID is always an array

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  console.log('tutut clikID' , clickedID)

  return (
    <div className='BgCartShow' onClick={() => handleActiveCart()}>
      <div className="CartShow" onClick={(e) => e.stopPropagation()}>
        <div className="nameClose align-items-center">
          <h5>Корзина</h5>
          <button onClick={() => handleActiveCart()} className="close-btn">
            <IoCloseOutline />
          </button>
        </div>

        <div className="CartShowBody">
          {clickedID && clickedID.length > 0 ? (
            clickedID.map(({ fullName, img, id , saleCost}) => (
              <ProductCartLine key={id} fullName={fullName} img={img} saleCost={saleCost}/>
            ))
          ) : (
            <p>Корзина пуста</p>
          )}
        </div>
        <CScenterLine getPrices={0} />

        <h3 className='w-100'>С этим товаром покупают</h3>
        <div className="prdxCart">
          <ProductBox data={PrdBxCartData} />
        </div>
      </div>
    </div>
  );
}
