import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

function Slider() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const imageUrl = "images/bg.png";
  const [menu, setmenu] = useState(true);
  const [openmenu, setopenmenu] = useState(false);
  const [activemenu, setactivemenu] = useState("Home");
  const handleclick = () => {
    setopenmenu(!openmenu);
    setmenu(!menu);
  };
  const handleclose = () => {
    setopenmenu(false);
    setmenu(true);
  };
  return (
    <div>
      <Navbar setactivemenu={setactivemenu} activemenu={activemenu} />

      <div className="slider">
        <div
          className="slider pulse-border"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="slider-content">
            {menu && (
              <div className="menu-icon">
                <i
                  className="fas fa-bars"
                  onClick={handleclick}
                  style={{ fontSize: "18px", marginLeft: "-7px" }}
                ></i>
              </div>
            )}
            {openmenu && (
              <ul className="responsive-menu list-unstyled ">
                <i
                  className="fa fa-times"
                  aria-hidden="true"
                  style={{ marginLeft: "157px" }}
                  onClick={handleclose}
                ></i>

                <li
                  onClick={() => setactivemenu("Home")}
                  className={activemenu == "Home" ? "underline" : ""}
                >
                  {" "}
                  <AnchorLink href="#home" className="anchor text-light ms-3">
                    Home
                  </AnchorLink>
                </li>
                <li
                  onClick={() => setactivemenu("About")}
                  className={activemenu == "About" ? "underline" : ""}
                >
                  <AnchorLink href="#about" className="anchor text-light ms-3">
                    About
                  </AnchorLink>
                </li>
                <li
                  onClick={() => setactivemenu("Services")}
                  className={activemenu == "Services" ? "underline" : ""}
                >
                  <AnchorLink
                    href="#service"
                    className="anchor text-light ms-3"
                  >
                    Services
                  </AnchorLink>
                </li>
                <li
                  onClick={() => setactivemenu("Portfolio")}
                  className={activemenu == "Portfolio" ? "underline" : ""}
                >
                  <AnchorLink
                    href="#portfolio"
                    className="anchor text-light ms-3"
                  >
                    Portfolio
                  </AnchorLink>
                </li>

                <li
                  onClick={() => setactivemenu("Contact")}
                  className={activemenu == "Contact" ? "underline" : ""}
                >
                  <AnchorLink href="#footer" className="anchor text-light ms-3">
                    Contact
                  </AnchorLink>
                </li>
              </ul>
            )}

            {/* <h6>
            Hardworking, Efficient Multitasker, Experienced Developer,
            Self-Motivated Learner.
          </h6> */}
            <br />
            <div className="slidercontent" data-aos="fade-up">
              <h1>
                <span> Fathimath thasneem</span>
              </h1>
              <div className="typing-container">
                <span style={{ fontSize: "35px", fontWeight: "bolder" }}>
                  I'm a{" "}
                </span>
                <TypeAnimation
                  sequence={["Front end developer", 2000, "Back end developer"]}
                  speed={50}
                  className="typing"
                  repeat={Infinity}
                  wrapper="span"
                />
              </div>
              <p>
                React.js developer with a focus on building seamless user
                experiences
                <br /> and a proven track record of delivering robust web
                applications
              </p>
            </div>

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
            <div className="btnstyle">
              <a
                href="images/fathimath_2024.pdf"
                className="text-decoration-none text-light"
              >
                Download Cv
              </a>
            </div>
          </div>
          <div className="slider-img" data-aos="fade-up">
            <img src="images/photo.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
