import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scrolling Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setExpanded(false); // Close navbar on mobile after clicking
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""} ${expanded ? "navbar-expanded" : ""}`}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand 
          onClick={() => scrollToSection("HOME")} 
          className="nav-brand"
        >
          <span className="brand-text">Portfolio</span>
          <span className="brand-dot">.</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
          className="navbar-toggler"
        >
          <span className={`toggler-icon ${expanded ? "open" : ""}`}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {["HOME", "ABOUT", "SKILLS", "PROJECTS", "REVIEW", "CONTACT"].map((item) => (
              <Nav.Link
                key={item}
                onClick={() => scrollToSection(item)}
                className="nav-link"
                active={false}
              >
                {item.charAt(0) + item.slice(1).toLowerCase()}
                <span className="nav-underline"></span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;