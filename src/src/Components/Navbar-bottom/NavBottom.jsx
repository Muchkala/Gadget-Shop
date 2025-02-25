import React, { useState }  from 'react'
import './NavBottom.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { LuBoxes } from 'react-icons/lu'
import navLogo from './../../Assets/Img/NavLogo.png'
import {  PiHeart, PiScales } from 'react-icons/pi'
import { LiaSearchSolid } from 'react-icons/lia'
import angleDown from '../../Assets/Img/numberAngleDown.svg'
import NumberBottom from './NumberBottom/NumberBottom'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useTheme } from '../../Constants/ThemeContent'
import ListProducts from '../ListProducts/ListProducts'
import CartShow from '../CartShow/CartShow'
import { IoCartOutline } from 'react-icons/io5'

export default function NavBottom() {

  const [activeNumbers , setActiveNumbers] = useState(false)

  const [activeScale , setActiveScale] = useState(false)


  const handleActiveNumbers = () =>{ setActiveNumbers((prev) => !prev)
    setActiveScale(false)
  };
  const handleActiveScale = () =>{ setActiveScale((prev) => !prev) 
    setActiveNumbers(false)
  }

  const { listProductActive, handleListProductActive, activeCart,handleActiveCart } = useTheme();
  
  return (
    <div className='navBottom'>
      <Container>
        <Row>
        <Col xs={4} sm={5} md={5} lg={4} xl={3}>
          <ul >
            <li><img src={navLogo} alt="" /></li>
            <li><button onClick={()=> handleListProductActive()}>КАТАЛОГ <p>ТОВАРОВ</p><span><LuBoxes /> </span></button></li>
          </ul>
          {listProductActive ? <ListProducts /> : ''}
          </Col>
          <Col xs={1} sm={5} md={5} lg={6} xl={6} style={{ display:'flex'}}>
          <ul className='navBcenter'>
            <li className='liCenter'><input type="text" /><button className='navInpBtn'><LiaSearchSolid/></button></li>
            <li >
              <ul className={activeNumbers ? 'activeNumberUL' :'numberUL'} >
                <li className='activeNumber' onClick={handleActiveNumbers}>+998900053581  <img src={angleDown} alt="" /></li>
                {activeNumbers && (
                  <NumberBottom handleActiveNumbers={handleActiveNumbers} />
                )}
              </ul>
            </li>
          </ul> 
          </Col>
          <Col xl={2} lg={1} md={1} sm={1} xs={2}>
          <ul className='rightNavBottom'>
            <li className={!activeScale ? 'PiScalesBold' : 'PiScalesBoldED'} onClick={handleActiveScale}><PiScales/>
            <span className='countPR'>8</span>
            {
              activeScale ? <ul className="PiScalesUL">
                          <li className="PiScalesLIHead">Списки сравнений</li>
                          <li className="PiScalesLi"><div className="Ltxt">Мониторы (2)</div> <FaRegTrashAlt /> </li>
                          <li className="PiScalesLi"><div className="Ltxt">Ноутбуки (4)</div> <FaRegTrashAlt /> </li>
                          <li className="PiScalesLi"><div className="Ltxt">Носители информации (2)</div> <FaRegTrashAlt /> </li>
                        </ul> : ''
            }
            </li>
            <li className='FaRegHeart'>< PiHeart/><span className='countPR'>2</span></li>
            <li className='IoCartOutline' onClick={()=>handleActiveCart()}> <IoCartOutline /> <span className='countPRCrt'>5</span></li>

            {
                activeCart ? <CartShow/> : ''
            }
          </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
