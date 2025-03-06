import React, { useState } from 'react'
import './DetailsCarousel.scss'
import vNaliche from '../../Assets/Img/naqdmi.png'
import { Col, Container, Row } from 'react-bootstrap'
import { productDetailImages } from '../../Constants/data'
import scaleImg from '../../Assets/Img/productPageScale.png'
import HeartImg from '../../Assets/Img/productPageHeart.png'
import dostavIMG from '../../Assets/Img/productPagedostavka.svg'


export default function DetailsCarousel() {
    const [activeValue, setActiveValue] = useState(0); // Keeps track of which product is selected
    const [activeImageIndex, setActiveImageIndex] = useState(0); // Keeps track of which thumbnail is selected

    // Get the current product based on the selected activeValue
    const activeProduct = productDetailImages[activeValue];

    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="detilsCarousel">
                        <div className="leftBtn">
                            {activeProduct.imgSmall.map((image, index) => (
                                <img
                                    onClick={() => setActiveImageIndex(index)} // Update the selected thumbnail image
                                    className={activeImageIndex === index ? 'activeImgBtn' : ''} 
                                    src={image} 
                                    alt={`Thumbnail ${index}`} 
                                    key={index}
                                />
                            ))}
                        </div>
                        {/* Large Image Display */}
                        <div className="bigImg">
                            <img
                                src={activeProduct.imgSmall[activeImageIndex]} // Use the small image based on the selected thumbnail index
                                alt={`Product Detail Image ${activeImageIndex}`} 
                            />
                        </div>
                    </div>
                </Col>
                <Col lg={6} style={{height: '500px'}}>
                    <div className="detailsContent w-100">
                        <div className="paymentPart">
                            <div className="paymentPartTop">
                                <div className="title">
                                </div>
                                <div className="naqdTolov">
                                   <img src={vNaliche} alt="" />
                                   <h5>B наличии</h5>
                                </div>
                                <div className="scaleheart">
                                    <img src={scaleImg} alt="" />
                                    <img src={HeartImg} alt="" />
                                </div>
                            </div>
                            <div className="paymentPartMiddle">
                                <div className="descriptionProduct"></div>
                                <div className="priceLineProduct">
                                    <div className="ProductPagePrice">
                                        <h6 className='withoutDiscount'>27 900 <span>грн.</span></h6>
                                        <h3 className='withDiscount'>27 300 <span>грн.</span></h3>
                                        </div>
                                    <button className="buyBtn">КУПИТЬ</button>
                                    <button className="buyOnCreditBtn">КУПИТЬ В КРЕДИТ</button>
                                </div>
                            </div>
                            <div className="paymentPartBottom">
                                <h5></h5>
                                <div className="longBox ">
                                    <div className="boxline d-flex align-items-center">
                                        <div className="leftLine d-flex align-items-center">
                                            <img src={dostavIMG} alt="" style={{width: '30px'}}/>
                                            <p>Самовывоз из магазина (Днепропетровск) </p>
                                        </div>
                                        <p>Отправим сегодня</p>
                                        <div className="rightLine">
                                            <p>По тарифам перевозчика</p>
                                            <p>Или бесплатно от 5000 грн</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
