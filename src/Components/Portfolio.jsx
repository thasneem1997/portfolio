import React from "react";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div
        className="portfolio-heading"
        style={{ margin: "0 auto", textAlign: "center" }}
      >
        <br /> <h6>latest projects</h6>
        <h1 style={{ fontSize: "35px" }}>Portfolio</h1>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <div className="portfolio-img">
            <a href="https://github.com/thasneem1997/browser-extension">
              <img src="images/portfolio1.jpg" />
            </a>
          </div>
          <div className="portfolio-content">
            <h3>Browser extension</h3>
            <div className="date">
              <p href="https://github.com/thasneem1997/browser-extension">
                Source code
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-img">
            <img src="images/portfolio2.jpg" />
          </div>
          <div className="portfolio-content">
            <h3>spotify Clone</h3>
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
            <h3>Grocery store</h3>
            <div className="date">
              <p href="https://github.com/thasneem1997/Grocery-store-site">
                Source code
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
