import React from "react";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div
        className="portfolio-heading"
        style={{ margin: "0 auto", textAlign: "center" }}
      >
        <br />
        <h1
          style={{ fontSize: "35px", marginLeft: "-10px" }}
          className="heading"
        >
          My Latest works
        </h1>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <div className="portfolio-img">
            <a href="https://browser-extension.onrender.com/">
              <img src="images/portfolio1.jpg" />
            </a>
          </div>
          <div className="portfolio-content">
            <h3>Browser Extension</h3>
            <div className="date">
              <p href="https://browser-extension.onrender.com/">Live link</p>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-img">
            <img src="images/portfolio2.jpg" />
          </div>
          <div className="portfolio-content">
            <h3>Spotify Clone</h3>
            <div className="date">
              <p href="https://github.com/thasneem1997/spotify-clone">
                Source code
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-img">
            <a href="https://github.com/thasneem1997/Grocery-store-site">
              <img src="images/portfolio3.jpg" />
            </a>
          </div>
          <div className="portfolio-content">
            <h3>Grocery Store</h3>
            <div className="date">
              <p href="https://github.com/thasneem1997/Grocery-store-site">
                Source code
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-img">
            <a href="https://www.mentorbeeeduverse.com/">
              <img src="images/portfolio4.png" />
            </a>
          </div>
          <div className="portfolio-content">
            <h3>Mentor bee</h3>
            <div className="date">
              <p href="https://www.mentorbeeeduverse.com/">Live link</p>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-img">
            <a href="https://lamknowledge.com/">
              <img src="images/portfolio5.png" />
            </a>
          </div>
          <div className="portfolio-content">
            <h3>LAM knowledge</h3>
            <div className="date">
              <p href="https://lamknowledge.com/">Live link</p>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-img">
            <a href="https://food-delivery-app-phi-ebon.vercel.app/">
              <img src="images/portfolio6.png" />
            </a>
          </div>
          <div className="portfolio-content">
            <h3>Tomato</h3>
            <div className="date">
              <p href="https://food-delivery-app-phi-ebon.vercel.app/">
                Live link
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
