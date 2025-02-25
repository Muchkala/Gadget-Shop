import React from 'react'
import './LeftMenu.scss'
import { Col } from 'react-bootstrap'
import { LiaAngleRightSolid } from 'react-icons/lia'
import { LeftMenuData } from '../../Constants/data'
import { useTheme } from '../../Constants/ThemeContent'

export default function LeftMenu() {
  const { handleLeftMenuClick , setListProductActive , listProductActive } = useTheme();
  return (
    <Col lg={3} >
        <ul className='LeftMenu' onClick={()=>setListProductActive(true)}>
          {
            LeftMenuData.map(({id, name, img}) => {
              return <li key={id} onClick={()=>handleLeftMenuClick(id)}><span> <img src={img} alt="" /> {name}</span><LiaAngleRightSolid/> </li>
            })
          }
        </ul>
    </Col >
  )
}
