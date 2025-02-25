import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductTitle.scss";

export default function ProductTitle() {
  return (
  <div className="ProductTitle">
    <Container className="ProductTitleCON">
      <Row className="productTitleRow">
          <Col lg={9} className="leftPRDTTLcol">
          <h1>Ноутбук Vinga Iron S140 Grey (S140-P50464GWP)</h1>
            
          <div className="d-flex PRTbtm">
            <div className="text-yellow-500">★★★★★</div>
            <span className="PRDnumber">Отзывов: 4</span>
          </div>
         </Col>
         <Col lg={3} style={{alignItems:'center', textAlign:'end'}}>
         <p className="PRDnumber">Код товара: 1234</p>
         </Col>
      </Row>
    </Container>
  </div>
  );
}
