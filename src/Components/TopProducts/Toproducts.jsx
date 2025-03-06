import React from 'react'
import './Toproducts.scss'
import { Container, Row } from 'react-bootstrap'
import UniTitle from '../UniTitle/UniTitle'
import ProductBox from '../ProductBox/ProductBox';
import SeeMore from '../SeeMore/SeeMore';
import { ProductBoxData } from '../../Constants/data';

export default function Toproducts() {
  return (
    <div className='Toproducts'>
        <Container>
          <UniTitle text={'Топ продаж'}/>
            <Row style={{justifyContent:'space-between', flexWrap:'wrap'}}>
              <ProductBox data={ProductBoxData}/>
              <SeeMore blue={true}/>
            </Row>
        </Container>
    </div>
  )
}