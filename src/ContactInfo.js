
import React from 'react';
import { SocialIcon } from 'react-social-icons'; // Ensure you have react-social-icons installed

function ContactInfo() {
  return (
    <div className="contact-info">
      <p>I currently attend
        <span className="Highlight"> Schulich School of Engineering </span>at the <span className="red-Highlight">University of Calgary</span>, as a 4th year<span className="reg-highlight"> Software Engineering</span> student.
      </p>
      <p>
        For additional details or to initiate contact regarding potential collaborations or opportunities, kindly reach out to me at the following address:
        <span className="Highlight"> Email: </span>
        <a className="email" href="mailto:Wahidullah.hojiaminu@ucalgary.ca">Wahidullah.hojiaminu@ucalgary.ca</a>
        <span className="Highlight"> LinkedIn: </span>
        <span><SocialIcon url="https://www.linkedin.com/in/wahid-h-71210b235" target="_blank" rel="noreferrer" /></span>
      </p>
      <p className="after-main">Happy Coding!</p>
    </div>
  );
}

export default ContactInfo;
