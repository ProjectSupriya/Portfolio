import React from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
              <h1 className="mylogo">SUPRI.YA</h1>
              <p>Email : supriyapatil1228@gmail.com<br/>
              Call : +917387916033</p>
              </div>
              
              <ul className="contactCircles">
              <li>
                  <a href="https://www.linkedin.com/in/supriya-patil-1402961b2" target="_blank" className="cl">
                    <FaLinkedin className="headerIcon" /></a>
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
