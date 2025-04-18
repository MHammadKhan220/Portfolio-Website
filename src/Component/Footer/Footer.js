import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="FOOTER" className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy</a>
          <span className="link-separator">|</span>
          <a href="#" className="footer-link">Terms</a>
          <span className="link-separator">|</span>
          <a href="#" className="footer-link">FAQs</a>
          <span className="link-separator">|</span>
          <a href="#" className="footer-link">Help</a>
        </div>
        <p className="copyright">
          © <strong>Muhammad Hammad Khan</strong>. All Rights Reserved. Designed by <strong>RMHK</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;