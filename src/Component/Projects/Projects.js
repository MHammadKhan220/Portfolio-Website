import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import { FiExternalLink } from "react-icons/fi";

// Import local images
import imag1 from '../Images/p1.jpg';
import imag2 from '../Images/p2.jpg';
import imag3 from '../Images/p3.jpg';
import imag4 from '../Images/p4.jpg';
import imag5 from '../Images/p5.jpg';
import imag6 from '../Images/p6.jpg';
import imag7 from '../Images/p7.jpg';

const images = [imag1, imag2, imag3, imag4, imag5, imag6, imag7];

const projectsData = [
  { 
    title: "Random Joke Generator", 
    text: "Inspired by the 1s and 0s in the image.",
    tags: ["HTML-5", "CSS3", "ja"]
  },
  { 
    title: "SiteStrategy", 
    text: "A name highlighting website growth and business strategy.",
    tags: ["SEO", "Marketing", "Analytics"]
  },
  { 
    title: "DevSync", 
    text: "Perfect for a collaborative web or app development project.",
    tags: ["Team", "Git", "CI/CD"]
  },
  { 
    title: "ByteBuild", 
    text: "A modern name for web development and programming.",
    tags: ["JavaScript", "TypeScript", "Webpack"]
  },
  { 
    title: "ClickFlow", 
    text: "A project focused on digital performance and conversion rates.",
    tags: ["UX", "Analytics", "Optimization"]
  },
  { 
    title: "WorkFlowPro", 
    text: "Enhancing productivity and workflow management.",
    tags: ["Automation", "SaaS", "B2B"]
  },
  { 
    title: "FrontEndX", 
    text: "A name tailored for front-end web development projects.",
    tags: ["React", "CSS3", "Responsive"]
  },
];

const Projects = () => {
  useEffect(() => {
    // Animation for project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }, index * 150);
    });
  }, []);

  return (
    <section id="PROJECTS" className="projects-section">
      <Container>
        <div className="section-header">
          <h1 className="section-title">PROJECTS</h1>
          <p className="section-subtitle">Explore my recent work and development projects</p>
        </div>
        
        <Row className="g-4 justify-content-center">
          {projectsData.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
              <Card className="project-card">
                <div className="image-container">
                  <Card.Img 
                    variant="top" 
                    src={images[index]} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="overlay"></div>
                </div>
                <Card.Body>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-text">{project.text}</Card.Text>
                  
                  <div className="tags-container">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <Button 
  variant="primary" 
  className="project-button"
  href="https://github.com/MHammadKhan220" 
  target="_blank"
  rel="noopener noreferrer"
>
  Project <FiExternalLink className="ms-2" />
</Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;