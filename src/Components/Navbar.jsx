import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import navbar from "../Styles/navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar({ setactivemenu, activemenu }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <nav>
        <div className="nav-container" data-aos="fade-right">
          <img src="images/logo.png" className="logo"></img>

          <ul className="menu">
            <li
              onClick={() => setactivemenu("Home")}
              className={activemenu === "Home" ? "active" : ""} // Using strict equality (===)
            >
              <AnchorLink href="#home" className="anchor text-light">
                Home
              </AnchorLink>
            </li>
            <li
              onClick={() => setactivemenu("About")}
              className={activemenu == "About" ? "active" : ""}
            >
              <AnchorLink href="#about" className="anchor text-light">
                About
              </AnchorLink>
            </li>
            <li
              onClick={() => setactivemenu("Services")}
              className={activemenu == "Services" ? "active" : ""}
            >
              <AnchorLink href="#service" className="anchor text-light">
                Services
              </AnchorLink>
            </li>
            <li
              onClick={() => setactivemenu("Portfolio")}
              className={activemenu == "Portfolio" ? "active" : ""}
            >
              <AnchorLink href="#portfolio" className="anchor text-light">
                Portfolio
              </AnchorLink>
            </li>

            <li
              onClick={() => setactivemenu("Contact")}
              className={activemenu == "Contact" ? "active" : ""}
            >
              <AnchorLink href="#footer" className="anchor text-light">
                Contact
              </AnchorLink>
            </li>
          </ul>
          <div className="nav-btn">
            <a
              href="https://www.linkedin.com/in/fathimath-thasneem-vv-326392257/"
              className="text-light"
            >
              Connect with me
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
