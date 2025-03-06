import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './GameZone.scss'
import GameZoneLine from '../GameZoneLine/GameZoneLine'
import ProductBox from '../ProductBox/ProductBox'
import SeeMore from '../SeeMore/SeeMore'
import GamerProducts from '../GamerProducts/GamerProducts'
import UniTitle from '../UniTitle/UniTitle'
import { ProductoxGeymers } from '../../Constants/data'

export default function GameZone() {
  return (
    <div className='gameZone'>
      <Container>
        <GameZoneLine/>
        <Row>
           <ProductBox data={ProductoxGeymers} noviy = {1}/>
           <SeeMore blue = {false}/>
        </Row>
        <UniTitle text={'Категории для геймеров'}/>
        <GamerProducts/>
      </Container>
    </div>
  )
}
