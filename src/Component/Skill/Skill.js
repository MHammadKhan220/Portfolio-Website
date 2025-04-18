import React, { useEffect } from 'react';
import './Skill.css';

const skills = [
  {
    name: "JavaScript",
    description: "Developed interactive and dynamic web applications using JavaScript, focusing on efficient DOM manipulation and API integrations.",
    level: 90,
    color: "#f0db4f"
  },
  {
    name: "Node.js",
    description: "Built scalable backend services with Node.js, leveraging Express.js for RESTful APIs and real-time applications.",
    level: 85,
    color: "#68a063"
  },
  {
    name: "React.js",
    description: "Created modern, responsive, and high-performance web applications using React.js with optimized state management and reusable components.",
    level: 95,
    color: "#61dafb"
  },
  {
    name: "Problem Solving",
    description: "Implemented efficient algorithms and data structures to optimize application performance and solve complex programming challenges.",
    level: 90,
    color: "#9c27b0"
  },
  {
    name: "HTML/CSS",
    description: "Built responsive and accessible web interfaces with semantic HTML and modern CSS techniques including Flexbox and Grid.",
    level: 95,
    color: "#e34c26"
  },
  {
    name: "TypeScript",
    description: "Developed type-safe applications with TypeScript, improving code quality and developer experience.",
    level: 80,
    color: "#3178c6"
  }
];

const Skill = () => {
  useEffect(() => {
    // Animate progress bars on component mount
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-level');
      bar.style.width = targetWidth + '%';
    });

    // Animate skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }, []);

  return (
    <section id="SKILLS" className="skill-section">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="title-text">My Skills</h2>
          <p className="title-subtext">Technologies I'm proficient in</p>
          <div className="title-underline"></div>
        </div>
        
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="skill-card">
                <div className="skill-header">
                  <h3 style={{ color: skill.color }}>{skill.name}</h3>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                
                <div className="progress-container">
                  <div 
                    className="progress-bar-fill" 
                    style={{ backgroundColor: skill.color }}
                    data-level={skill.level}
                  ></div>
                </div>
                
                <p className="skill-description">{skill.description}</p>
                
                <div className="skill-tags">
                  <span className="tag">Frontend</span>
                  <span className="tag">Backend</span>
                  <span className="tag">Full Stack</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;