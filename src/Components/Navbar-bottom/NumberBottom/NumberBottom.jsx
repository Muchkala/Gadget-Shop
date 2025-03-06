import React from 'react'
import phoneIMG from '../../../Assets/Img/PhoneIconinNmbr.png'
import WhatsUpIMG from '../../../Assets/Img/whatsUpinNmbr.png'
import TelegramIMG from '../../../Assets/Img/telegramInnmbr.png'
import UniLogbutton from '../../LogIN/UniLogbutton/UniLogbutton';
import { Row } from 'react-bootstrap';

export default function NumberBottom({handleActiveNumbers}) {
  return (
    <>
        <li><img src={phoneIMG} alt="" /> +998900053581</li>
        <li><img src={phoneIMG} alt="" /> +998900053581</li>
        <li>
        <img src={phoneIMG} alt="" /> +998900053581
        <img src={WhatsUpIMG} alt="" /> <img src={TelegramIMG} alt="" />
        </li>
        <li>
        <Row className="LogWithTop">
            <div className="line"></div>
            <p className="greyLineText">или</p>
            <div className="line"></div>
        </Row>
        </li>
        <li><h6>Перезвонить мне</h6></li>
        <li><input type="text" placeholder='Ваше имя' /></li>
        <li><input type="text" placeholder='Ваш номер телефона' /></li>
        <li onClick={handleActiveNumbers} ><UniLogbutton text={'ЗАКАЗАТЬ ЗВОНОК'} /></li>
    </>
  )
}
