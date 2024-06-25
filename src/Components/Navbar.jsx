import React from "react";
import navbar from "../Styles/navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar({ setactivemenu, activemenu }) {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <img src="images/logo.png"></img>

          <ul className="menu">
            <li
              onClick={() => setactivemenu("Home")}
              className={activemenu === "Home" ? "active" : ""} // Using strict equality (===)
            >
              <AnchorLink href="#home" className="anchor">
                Home
              </AnchorLink>
            </li>
            <li
              onClick={() => setactivemenu("About")}
              className={activemenu == "About" ? "active" : ""}
            >
              <AnchorLink href="#about" className="anchor">
                About
              </AnchorLink>
            </li>
            <li
              onClick={() => setactivemenu("Services")}
              className={activemenu == "Services" ? "active" : ""}
            >
              <AnchorLink href="#service" className="anchor">
                Services
              </AnchorLink>
            </li>
            <li
              onClick={() => setactivemenu("Portfolio")}
              className={activemenu == "Portfolio" ? "active" : ""}
            >
              <AnchorLink href="#portfolio" className="anchor">
                Portfolio
              </AnchorLink>
            </li>

            <li
              onClick={() => setactivemenu("Contact")}
              className={activemenu == "Contact" ? "active" : ""}
            >
              <AnchorLink href="#footer" className="anchor">
                Contact
              </AnchorLink>
            </li>
          </ul>
          <div className="nav-btn">
            <a href="https://www.linkedin.com/in/fathimath-thasneem-vv-326392257/">
              Connect with me
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
