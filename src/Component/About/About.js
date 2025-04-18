import React, { useRef } from 'react';
import img from '../Images/img.jpg';
import './About.css';

const About = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    e.currentTarget.style.setProperty('--mouse-x', x);
    e.currentTarget.style.setProperty('--mouse-y', y);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--mouse-x', 0.5);
    e.currentTarget.style.setProperty('--mouse-y', 0.5);
  };

  return (
    <section id='ABOUT' className="about-section">
      {/* Title Container - Top Center */}
      <div className="title-container">
        <h1 className="section-title">About Me</h1>
      </div>

      {/* Unified Content Container */}
      <div className="content-container">
        {/* Image Section */}
        <div className="image-section">
          <div 
            className="image-wrapper"
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="color-backdrop"></div>
            <img 
              src={img} 
              alt="My Profile" 
              className="profile-img"
            />
            <div className="image-overlay">
              <p className="hover-text">
                Web Developer | Frontend Developer | React.js Developer
              </p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-section">
          <div className="typing-effect">
            <p style={{"--order": 1}}>
              I am a Front End Developer with a strong passion for creating responsive websites.
            </p>
            <p style={{"--order": 2}}>
              I specialize in HTML, CSS, JavaScript, and React to build interactive experiences.
            </p>
            <p style={{"--order": 3}}>
              My experience includes working with Bootstrap and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;