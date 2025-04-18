import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import imag from '../Images/img.jpg';
import "./Home.css";
import { FaDownload } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    // Add animation class after component mounts
    const textElements = document.querySelectorAll('.hero-text h4, .hero-text h1, .hero-text h3');
    textElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, index * 300);
    });

    // Image animation
    const image = document.querySelector('.hero-image img');
    setTimeout(() => {
      if (image) {
        image.style.opacity = 1;
        image.style.transform = 'scale(1) rotate(0deg)';
      }
    }, 900);
  }, []);

  // Function to handle download
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    // Set the path to your CV file (must be in public folder)
    link.href = process.env.PUBLIC_URL + '/CV_RMHK.pdf';
    // Set the download filename
    link.download = 'Muhammad_Hammad_Khan_CV.pdf';
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='HOME' className="hero-section">
      <div className="container d-flex align-items-center justify-content-center flex-wrap-reverse py-5">
        {/* Text Content */}
        <div className="hero-text text-center text-md-start">
          <h4 className="text-gradient">Hello, I'm</h4>
          <h1 className="name-title">Muhammad Hammad Khan</h1>
          <h3 className="job-titles">
            <span className="title-item">Frontend Developer</span>
            <span className="title-separator"> | </span>
            <span className="title-item">React Specialist</span>
            <span className="title-separator"> | </span>
            <span className="title-item">Web Developer</span>
          </h3>
          <div className="cta-buttons mt-4">
            <button
              onClick={() =>
                window.location.href =
                "mailto:mhammadkhan420@gmail.com?subject=Hiring Inquiry&body=Hi Hammad,I would like to hire you for a project. Let's connect!"
              }
              className="btn btn-primary me-3 hire-btn"
            >
              Hire Me
            </button>

            <button 
              className="btn btn-outline-primary projects-btn"
              onClick={() => {
                const gallerySection = document.getElementById('Gallery');
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src={imag} 
              alt="Muhammad Hammad Khan" 
              className="img-fluid profile-image" 
            />
            <div className="image-border-animation"></div>
            <div className="image-dots"></div>
          </div>
        </div>
      </div>
      
      {/* Download Button */}
      <div className="download-btn-container">
        <button 
          className="download-btn pulse-animation"
          onClick={handleDownload}
        >
          <FaDownload className="me-2" />
          Download CV
        </button>
      </div>
    </section>
  );
};

export default Home;