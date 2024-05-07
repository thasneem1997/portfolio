import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // Import the envelope icon
import "@fortawesome/fontawesome-free/css/all.css";

function Slider() {
  const [menu, setmenu] = useState(true);
  const [openmenu, setopenmenu] = useState(false);
  const handleclick = () => {
    setopenmenu(!openmenu);
    setmenu(!menu);
  };
  const handleclose = () => {
    setopenmenu(false);
  };
  return (
    <div className="container">
      <Navbar />

      <div className="slider">
        <div className="slider-content">
          {menu && (
            <div className="menu-icon">
              <i className="fas fa-bars" onClick={handleclick}></i>
            </div>
          )}
          {openmenu && (
            <ul className="responsive-menu">
              <i
                className="fa fa-times"
                aria-hidden="true"
                style={{ marginLeft: "60px" }}
                onClick={handleclose}
              ></i>

              <li>
                {" "}
                <AnchorLink href="#home" className="anchor">
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about" className="anchor">
                  About
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#service" className="anchor">
                  Services
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#portfolio" className="anchor">
                  Portfolio
                </AnchorLink>
              </li>

              <li>
                <AnchorLink href="#footer" className="anchor">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          )}

          <h6>
            Hardworking, Efficient Multitasker, Experienced Developer,
            Self-Motivated Learner.
          </h6>
          <br />
          <h1>
            <span style={{ color: "#1dd0f9" }}>I'm Fathimath thasneem</span>
            <br />
            Full stack developer
          </h1>
          <p>
            React.js developer with a focus on building seamless user
            experiences
            <br /> and a proven track record of delivering robust web
            applications
          </p>
          <br />

          <div className="icon-container">
            <a
              href="https://github.com/thasneem1997/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/@fathimatht69047"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/fathimath-thasneem-vv-326392257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:fathimaththasnee@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

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
