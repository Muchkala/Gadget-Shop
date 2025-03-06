import React, { useEffect } from 'react'
import './ListProducts.scss'
import { Col, Container, Row } from 'react-bootstrap';
import LeftMenu from '../LeftMenu/LeftMenu';
import { ListProductsData } from '../../Constants/data';
import { useTheme } from '../../Constants/ThemeContent';

export default function ListProducts({ handleClose }) {
  // This function prevents closing when clicking inside the content area
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when unmounted
    };
  }, []);
  const { leftMenuClick, handleListProductActive, listProductActive , setListProductActive } = useTheme();

  return (
    <div className="modalBackground" onClick={()=>handleListProductActive()}>
      <Container className='listProducts justify-content-center' >
        <Row>
          <Col lg={11} onClick={handleContentClick} style={{ display: 'flex', background: 'white' , gap:'0'}}>
            <LeftMenu />
            { leftMenuClick === 2 || leftMenuClick === 5 || leftMenuClick === 7 ? ListProductsData.map(({id, title1,  namesLis1,  title2,   namesLis2,   }) => {
                return <Col lg={2} key={id}>
                  <div  className='listProducts__products'>
                    <h6>{title1}</h6>
                    <ul className='listProducts__products__ul'>
                      {namesLis1.map(({name, id}) => (
                        <li key={id}>{name}</li>
                      ))}
                    </ul>
                  </div>
                  <div  className='listProducts__products'>
                    <h6>{title2}</h6>
                    <ul className='listProducts__products__ul'>
                      {namesLis2.map(({name, id}) => (
                        <li onClick={(e)=>setListProductActive(true)} key={id}>{name}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              })
              : ''
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}
