import React, { useState } from 'react'
import './DetailsCarousel.scss'
import vNaliche from '../../Assets/Img/naqdmi.png'
import { Col, Container, Row } from 'react-bootstrap'
import { DetailsCaruselBottomDelivery, DetailsCaruselBottomWarranty, DetailsCaruselPaymentBottom, detailsProductCharacteristics, productDetailImages } from '../../Constants/data'
import scaleImg from '../../Assets/Img/productPageScale.png'
import HeartImg from '../../Assets/Img/productPageHeart.png'
import UniMiniLink from '../UniTitle/UniMiniLink/UniMiniLink'


export default function DetailsCarousel() {
    const [activeValue, setActiveValue] = useState(0); // Keeps track of which product is selected
    const [activeImageIndex, setActiveImageIndex] = useState(0); // Keeps track of which thumbnail is selected

    // Get the current product based on the selected activeValue
    const activeProduct = productDetailImages[activeValue];

    return (
        <Container className='detailsProduct'>
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
                    <div className="mainCharacteristics">
                        <h3>Основные характеристики</h3>
                        <div className="CharacteristicsBox">
                            { 
                            detailsProductCharacteristics.map(({id, right, left}) => {
                                    return <div className="CHBline" key={id} style={id % 2 == 0 ? {} : {backgroundColor: '#fff'}}>
                                        <div className="CHBLleft">{left}</div>
                                        <div className="CHBLright">{right}</div>
                                    </div>
                                })
                            }
                        </div>
                        <UniMiniLink text={'Смотреть все характеристики'}/>
                    </div>
                </Col>
                <Col lg={6} >
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
                                <div className="longBox ">
                                    <h5>Доставка</h5>
                                    {
                                        DetailsCaruselPaymentBottom.map(({id,  shopName, sendDate, tarif, img,costDelivery}) => {
                                            return <div key={id} className="boxline">
                                                    <div className="leftLine ">
                                                        <img src={img} alt=""/>
                                                        <p>{shopName}</p>
                                                    </div>
                                                    <p>{sendDate}</p>
                                                    <div className="rightLine">
                                                        <p className='RLblack'>{tarif}</p>
                                                        <p className='RLblue'>{costDelivery}</p>
                                                    </div>
                                                </div>
                                        })
                                    }
                                </div>
                                <div className="longBox Oplata">
                                    <h5>Оплата</h5>
                                    {
                                        DetailsCaruselBottomDelivery.map(({id,Oimg, Otext,}) => {
                                            return <div key={id} className="OplataLine">
                                            <img src={Oimg} alt="" />
                                            <p className='OPlataTxt'>{Otext}</p>
                                            </div>
                                        })
                                    }

                                </div>
                                <div className="longBox Oplata">
                                    <h5>Гарантия</h5>
                                    {
                                        DetailsCaruselBottomWarranty.map(({id,Oimg, Otext,}) => {
                                            return <div key={id} className="OplataLine">
                                            <img src={Oimg} alt="" />
                                            <p className='OPlataTxt'>{Otext}</p>
                                            </div>
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
