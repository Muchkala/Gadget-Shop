import React, { useState } from 'react'
import './DetailsCarousel.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { productDetailImages } from '../../Constants/data'

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
                        {/* Small Image Thumbnails */}
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
            </Row>
        </Container>
    )
}
