import React from 'react';

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
              <input type="text" id="name" /><br /><br />
              <label htmlFor="email">Your email</label>
              <input type="text" id="email" /><br /><br />
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" /><br /><br />
              <label htmlFor="message">Message</label>
              <textarea id="message" cols="40" rows="4"></textarea><br />
              <input type="button" value="Send message" />
            </form>
          </div>

          <div className="contact">
            <table>
              <tbody>
                <tr>
                  <td><i className="fa-solid fa-envelope"></i></td>
                  <td>absc@gmail.com</td>
                </tr>
                <tr>
                  <td><i className="fa-solid fa-location-dot"></i></td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit</td>
                </tr>
                <tr>
                  <td><i className="fa-solid fa-phone"></i></td>
                  <td>12334</td>
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
