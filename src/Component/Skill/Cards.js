import React, { useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './Cards.css';
import imag from '../Images/s1.jpg';
import imag2 from '../Images/s2.jpg';
import imag3 from '../Images/s3.jpg';
import imag4 from '../Images/s4.jpeg';
import imag5 from '../Images/s5.jpeg';
import imag6 from '../Images/s6.jpeg';
import imag7 from '../Images/s7.png';
import imag8 from '../Images/s8.jpeg';
import imag9 from '../Images/s9.jpeg';
import imag10 from '../Images/s10.jpeg';
import imag11 from '../Images/s11.jpeg';

const images = [imag, imag2, imag3, imag4, imag5, imag6, imag7, imag8, imag9, imag10, imag11];

const BasicExample = () => {
  useEffect(() => {
    // Animation for cards
    const cards = document.querySelectorAll('.image-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, []);

  return (
    <Container id="CARDS" className="cards-container py-5">
      <h2 className="section-title text-center mb-5" id='Gallery'>My Work Gallery</h2>
      <Row className="g-4">
        {images.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="image-card">
              <div className="card-img-container">
                <Card.Img
                  variant="top"
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="card-img"
                />
                <div className="card-overlay">
  <div className="overlay-content">
    <h5>Project {index + 1}</h5>
    <a
      href="https://github.com/MHammadKhan220?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      className="view-btn"
    >
      Visit Repo
    </a>
  </div>
</div>

              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BasicExample;