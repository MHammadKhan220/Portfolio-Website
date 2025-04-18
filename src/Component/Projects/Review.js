import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaCircle, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Review.css";

const reviews = [
  {
    id: 1,
    text: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills helped us deliver our project two weeks ahead of schedule. The code quality was exceptional and well-documented.",
    name: "John Doe",
    profession: "CTO at TechSolutions",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    text: "The design work exceeded our expectations. They understood our brand identity perfectly and translated it into a stunning visual experience. Our customer engagement has increased by 40% since the redesign.",
    name: "Jane Smith",
    profession: "Marketing Director at CreativeCo",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    id: 3,
    text: "As an SEO specialist, I was impressed with how they implemented our recommendations. The website's performance improved dramatically, and we're now ranking on the first page for all our target keywords.",
    name: "Michael Brown",
    profession: "SEO Manager at DigitalBoost",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
  },
  {
    id: 4,
    text: "The e-commerce solution they built has transformed our business. The checkout process is seamless, and the admin dashboard makes inventory management a breeze. Our sales have increased by 65%.",
    name: "Sarah Johnson",
    profession: "Founder of BoutiqueOnline",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    id: 5,
    text: "Their React components were so well-structured that our team could easily build upon them. The documentation was thorough, and they provided excellent support during the integration process.",
    name: "David Wilson",
    profession: "Lead Developer at AppFactory",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4,
  },
  {
    id: 6,
    text: "The mobile app they developed has perfect UI/UX. Our user retention rates have doubled, and we're getting fantastic feedback about the intuitive interface and smooth performance.",
    name: "Emily Chen",
    profession: "Product Manager at MobileFirst",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextReview();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="REVIEW" className="review-section py-5">
      <Container>
        <h1 className="section-title text-center mb-5">Client Testimonials</h1>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="review-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              
              <p className="review-text">
                {reviews[currentIndex].text}
              </p>
              
              <div className="quote-icon right">
                <FaQuoteRight />
              </div>

              <div className="reviewer-info">
                <div className="image-container">
                  <img 
                    src={reviews[currentIndex].image} 
                    alt={reviews[currentIndex].name} 
                    className="review-image"
                  />
                </div>
                <div className="info-text">
                  <h4 className="review-name">{reviews[currentIndex].name}</h4>
                  <p className="review-profession">{reviews[currentIndex].profession}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`star ${i < reviews[currentIndex].rating ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="review-controls">
              <button 
                className="control-btn prev" 
                onClick={prevReview}
                aria-label="Previous review"
              >
                <IoIosArrowBack />
              </button>
              
              <div className="review-dots">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to review ${index + 1}`}
                  >
                    <FaCircle />
                  </button>
                ))}
              </div>
              
              <button 
                className="control-btn next" 
                onClick={nextReview}
                aria-label="Next review"
              >
                <IoIosArrowForward />
              </button>
            </div>

            <div className="autoplay-toggle">
              <button onClick={toggleAutoPlay}>
                {isAutoPlaying ? 'Pause' : 'Play'} Auto Play
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Review;