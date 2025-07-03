import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-header">
        <h2>Let's Connect!</h2>
        <p>Ready to discuss opportunities, collaborations, or just say hello?</p>
      </div>
      
      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <div className="contact-content">
            <h4>Email</h4>
            <a href="mailto:Wahidullah.hojiaminu@ucalgary.ca">
              Wahidullah.hojiaminu@ucalgary.ca
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">💼</div>
          <div className="contact-content">
            <h4>LinkedIn</h4>
            <a 
              href="https://www.linkedin.com/in/wahid-hoji" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/wahid-hoji
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">🔗</div>
          <div className="contact-content">
            <h4>GitHub</h4>
            <a 
              href="https://github.com/oneHalo" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/oneHalo
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">🎓</div>
          <div className="contact-content">
            <h4>Education</h4>
            <p>Software Engineering Student<br/>University of Calgary</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">📍</div>
          <div className="contact-content">
            <h4>Location</h4>
            <p>Calgary, Alberta, Canada</p>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p>Looking forward to hearing from you!</p>
      </div>
    </div>
  );
}

export default ContactInfo;
