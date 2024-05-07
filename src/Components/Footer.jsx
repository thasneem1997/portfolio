import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // Import the envelope icon
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6e6cc732-3c88-48e5-990e-c86dccd94ac8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <footer>
        <div  id="footer" className="footer-head" style={{ textAlign: "center" }}>
          <h1 style={{ marginTop: "51px", fontSize: "40px" }}>Get in Touch</h1>
        </div>

        <div className="footer-content">
          <div className="form">
            <h3>Enter your details</h3>
            <form onSubmit={onSubmit}>
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" style={{ marginLeft: "30px" }}placeholder="Enter your email" required/>
              <br />
              <br />
              <label htmlFor="email">Your email</label>
              <input type="text" name="email" id="email" style={{ marginLeft: "28px" }} placeholder="Enter Your Email" required/>
              <br />
              <br />
            
              <label htmlFor="message" >Message</label>
              <textarea
                id="message"
                cols="40"
                rows="4"
                style={{ marginLeft: "97px" }} placeholder="Enter Your Message" 
                name="message"  required></textarea>
              <br />
              <button type="submit"  className="footer-btn" value="Send message"style={{ marginLeft: "101px" }}>Send Message</button>
            </form>
            <span>{result}</span>
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
