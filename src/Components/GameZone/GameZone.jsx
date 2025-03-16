import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './GameZone.scss'
import GameZoneLine from '../GameZoneLine/GameZoneLine'
import ProductBox from '../ProductBox/ProductBox'
import SeeMore from '../SeeMore/SeeMore'
import GamerProducts from '../GamerProducts/GamerProducts'
import UniTitle from '../UniTitle/UniTitle'
import { ProductoxGeymers } from '../../Constants/data'
import { Link } from 'react-router-dom'

export default function GameZone() {
  return (
    <div className='gameZone'>
      <Container>
        <GameZoneLine/>
        <Row>
          <Link to='/product'><ProductBox data={ProductoxGeymers}  noviy = {1}/></Link>
           <SeeMore blue = {false}/>
        </Row>
        <UniTitle text={'Категории для геймеров'}/>
        <GamerProducts/>
      </Container>
    </div>
  )
}
