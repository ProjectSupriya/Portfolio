import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo info__contacts">
              <h1 className="mylogo">Get In Touch</h1>
              <p>
                I am looking for new opportunities, my inbox is always open. I look forward to connecting you soon and I'm
                happy to answer any questions you have. 
             </p>
             <strong>Thank You !</strong>
              </div>
              
              <ul className="contactCircles">
              <li>
                  <a href="mailto:supriyapatil1228@gmail.com" target="_blank" className="cl">
                    <FaEnvelope className="headerIcon" /></a>
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/supriya-patil-1402961b2" target="_blank" className="cl">
                    <FaLinkedin className="headerIcon" /></a>
                  </li>
                  <li>
                  <a href="tel:+917387916033" target="_self" className="cl">
                    <FaPhoneAlt className="headerIcon" /></a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
