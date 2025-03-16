import React from 'react'
import './Toproducts.scss'
import { Container, Row } from 'react-bootstrap'
import UniTitle from '../UniTitle/UniTitle'
import ProductBox from '../ProductBox/ProductBox';
import SeeMore from '../SeeMore/SeeMore';
import { ProductBoxData } from '../../Constants/data';
import { Link } from 'react-router-dom';

export default function Toproducts() {
  return (
    <div className='Toproducts'>
        <Container>
          <UniTitle text={'Топ продаж'}/>
            <Row style={{justifyContent:'space-between', flexWrap:'wrap'}}>
              <Link to='/product'><ProductBox data={ProductBoxData}/></Link>
              <SeeMore blue={true}/>
            </Row>
        </Container>
    </div>
  )
}