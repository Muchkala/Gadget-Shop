import React from "react";
import "./ReviewsInstagramSection.scss";
import { Container, Row, Col} from "react-bootstrap";
import CommentProfile from '../../Assets/Img/CommentProfile.png'
import Slider from "react-slick";
import { CommentInfo } from "../../Constants/data";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import InstagramPart from "../InstagramPart/InstagramPart";

const ReviewsInstagramSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container className="my-5">
      <Row >
      <Col lg={5} className="ReviewsInstagramSection">
          <h2 className="comUniH2">Отзывы</h2>
          <div className="CommentBox">
            <div className="CommentLeft">
                <img src={CommentProfile} alt="" />
            </div>
            <div className="CommentMiddle">
              <div className="slider-container">
                <Slider {...settings}>
                
                    {
                      CommentInfo.map(({id, name, img, comment, date,  rating,  })=>{
          return  <div key={id}> 
                      <h5>{name}</h5>
                    <p>{comment}</p>
                     <div className="comStarDate">
                      <div className="comStar">                
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={i < rating ? {color:'yellow'} : {color:'gray'}}>★</span>))}
                      </div>
                      <div className="comDate">{date}</div>
                     </div>
                  </div>
                      })
                    }
                </Slider>
              </div>
            </div>
            <div className="CommentRight">
              <h2 className="overAllRating">4,7</h2>
              <div className="overAllStar">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={i < 4 ? {color:'yellow'} : {color:'gray'}}>★</span>))}
              </div>
              <Link to={'/'}>
              <p className="allComs">532 отзыва на Google</p></Link>
            </div>
          </div>
          <Link to={'/'}>
            <p className="miniLink">Все отзывы на Google <IoIosArrowRoundForward /></p>
          </Link>
      </Col>
      <InstagramPart />
      </Row>
    </Container>
  );
};

export default ReviewsInstagramSection;
