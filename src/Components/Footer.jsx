import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // Import the envelope icon
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-head" style={{ textAlign: "center" }}>
          <h1 style={{ marginTop: "51px", fontSize: "40px" }}>Contact</h1>
        </div>

        <div className="footer-content">
          <div className="form">
            <h3>Enter your details</h3>
            <form action="" method="post">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" style={{ marginLeft: "30px" }} />
              <br />
              <br />
              <label htmlFor="email">Your email</label>
              <input type="text" id="email" style={{ marginLeft: "28px" }} />
              <br />
              <br />
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" style={{ marginLeft: "50px" }} />
              <br />
              <br />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="40"
                rows="4"
                style={{ marginLeft: "97px" }}
              ></textarea>
              <br />
              <input type="button"  className="footer-btn" value="Send message"style={{ marginLeft: "101px" }} />
            </form>
          </div>

          <div className="contact">
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href="mailto:your.email@example.com">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </td>
                  <td>fathimaththasnee@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <i className="fas fa-map-marker-alt"></i>{" "}
                  </td>
                  <td>Bangalore karnataka</td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-solid fa-phone"></i>
                  </td>
                  <td>8136883613</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr />

        <div style={{ textAlign: "center" }}>
          <h5>copyright@ 2024. All rights reserved</h5>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
