import React, { useRef } from "react";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    // FormSubmit handles the submission, we just show success
    alert("Message sent successfully!");
    formRef.current.reset();
  };

  return (
    <section id="CONTACT" className="contact-section py-5">
      <Container className="contact-container">
        {/* Animated Heading */}
        <div className="text-center mb-5">
          <h1 className="contact-title animate-char">CONTACT</h1>
          <h4 className="contact-subtitle slide-in">Get in Touch</h4>
          <p className="contact-text fade-in">
            I'd love to hear from you! Fill out the form below and I'll get back to you soon.
          </p>
        </div>

        {/* Modified Form - Uses FormSubmit */}
        <Form 
          ref={formRef}
          onSubmit={handleSubmit}
          action="https://formsubmit.co/mhammadkhan420@gmail.com" 
          method="POST"
          className="contact-form float-animation"
        >
          {/* Required FormSubmit Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New message from your portfolio!" />
          <input type="hidden" name="_next" value="https://yourportfolio.com/thanks.html" /> {/* Optional */}

          {/* Name & Email Fields */}
          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <FloatingLabel controlId="floatingName" label="Your Name" className="input-field">
                <Form.Control 
                  type="text" 
                  name="name"  // Required for FormSubmit
                  placeholder="Your Name" 
                  required 
                  className="input-box"
                />
              </FloatingLabel>
            </div>
            
            <div className="col-md-6">
              <FloatingLabel controlId="floatingEmail" label="Your Email" className="input-field">
                <Form.Control 
                  type="email" 
                  name="email"  // Required for FormSubmit
                  placeholder="Your Email" 
                  required 
                  className="input-box"
                />
              </FloatingLabel>
            </div>
          </div>

          {/* Subject Field */}
          <div className="mb-4">
            <FloatingLabel controlId="floatingSubject" label="Subject" className="input-field">
              <Form.Control 
                type="text" 
                name="_subject"  // Will override the hidden subject
                placeholder="Subject" 
                required 
                className="input-box"
              />
            </FloatingLabel>
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <FloatingLabel controlId="floatingMessage" label="Message" className="input-field">
              <Form.Control 
                as="textarea" 
                name="message"  // Required for FormSubmit
                placeholder="Your message" 
                style={{ height: "150px" }} 
                required 
                className="input-box"
              />
            </FloatingLabel>
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center mt-4">
            <Button 
              className="contact-btn pulse-animation" 
              variant="primary" 
              type="submit"
              size="lg"
            >
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;