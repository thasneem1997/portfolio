import React from "react";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // Import the envelope icon

function Slider() {
  return (
    <div className="container">
      <Navbar />
      <div className="slider">
        <div className="slider-content">
          <h6>Empower, Excel, Achieve, Succeed</h6>
          <h1>
            <span style={{ color: "#1dd0f9" }}>Hi,I'm</span>
            <br />
            Fathimath thasneem{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            <br /> dolores amet aperiam! Iusto odit cumque sint? Culpa
            dignissimos,on?
          </p>
          <br />

          <div className="icon-container">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:your.email@example.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          <br/>
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
