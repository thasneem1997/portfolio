import React from "react";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // Import the envelope icon
import "@fortawesome/fontawesome-free/css/all.css";

function Slider() {
  return (
    <div className="container">
      <Navbar />
      
      <div className="slider">
      
        <div className="slider-content">
          <div className="menu-icon">
          <i className="fas fa-bars"></i>
            </div>
        
          <h6>Empower, Excel, Achieve, Succeed</h6>
          <h1>
            <span style={{ color: "#1dd0f9" }}>I'm Fathimath thasneem</span>
            <br />
           Full stack developer
          </h1>
          <p>
            React.js developer with a focus on building seamless user
            experiences<br/> and a proven track record of delivering robust web
            applications
          </p>
          <br />

          <div className="icon-container">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
             >
              <FontAwesomeIcon icon={faGithub} style={{width:'250px',marginLeft:'-96px'}} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} style={{width:'250px',marginLeft:'-96px'}}  />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{width:'250px',marginLeft:'-96px'}}  />
            </a>
            <a href="mailto:your.email@example.com">
              <FontAwesomeIcon icon={faEnvelope} style={{width:'250px',marginLeft:'-96px'}}  />
            </a>
          </div>
          <br />  <br />
          <div className="btn">
            <a href="">Download Cv</a>
          </div>
        </div>
        <div className="slider-img">
          <img src="images/photo.png" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
