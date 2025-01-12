import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-bootstrap/Carousel";

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
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
      <Carousel data-bs-theme="dark">
        <Carousel.Item style={{ border: "none" }}>
          <div className="portfolio" id="portfolio" data-aos="fade-up">
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <Card style={{ width: "20rem", backgroundColor: "black" }}>
                  <Card.Img variant="top" src="images/portfolio1.jpg" />
                  <Card.Body>
                    <Card.Title className="text-light">
                      DailyFocus - Browser Extension
                    </Card.Title>
                    <Card.Text>
                      A React-based browser extension designed to enhance
                      productivity by displaying a new motivational quote and a
                      beautiful background image with each new tab.
                      <div className="d-flex gap-2 mt-2">
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          React
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          Css
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          {" "}
                          Mozilla Firefox extension
                        </Badge>
                      </div>
                    </Card.Text>
                    <div className="d-flex flex-row gap-8">
                      <Button
                        style={{ backgroundColor: "#f61ff3" }}
                        className="border-0"
                      >
                        <a href="https://browser-extension.onrender.com">
                          View project
                        </a>
                      </Button>
                      <Button className="ms-3 text-bg-dark border-0">
                        <FaGithub />
                        <a
                          href="https://github.com/thasneem1997/spotify-clone"
                          className="ms-1 mt-2"
                        >
                          Git Hub
                        </a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="portfolio-item">
                <Card style={{ width: "20rem", backgroundColor: "black" }}>
                  <Card.Img variant="top" src="images/portfolio2.jpg" />
                  <Card.Body>
                    <Card.Title className="text-light">
                      Spotify Clone
                    </Card.Title>
                    <Card.Text>
                      A React-based browser extension designed to enhance
                      productivity by displaying a new motivational quote and a
                      beautiful background image with each new tab.
                      <div className="d-flex gap-2 mt-2">
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          React
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          Css
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          {" "}
                          Web Api
                        </Badge>
                      </div>
                    </Card.Text>
                    <div className="d-flex flex-row gap-8">
                      <Button
                        style={{ backgroundColor: "#f61ff3" }}
                        className="border-0"
                      >
                        View project
                      </Button>
                      <Button className="ms-3 text-bg-dark border-0">
                        <FaGithub />
                        <a
                          href="https://github.com/thasneem1997/spotify-clone"
                          className="ms-1 mt-2"
                        >
                          Git Hub
                        </a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="portfolio-item">
                <Card style={{ width: "20rem", backgroundColor: "black" }}>
                  <Card.Img variant="top" src="images/portfolio6.png" />
                  <Card.Body>
                    <Card.Title className="text-light">
                      Food Delivery App
                    </Card.Title>
                    <Card.Text>
                      Developed a fully responsive web application for food
                      delivery named ’Tomato.’ Tomato brings convenience right
                      at your fingertips, making food ordering a breeze
                      <div className="d-flex gap-2 mt-2">
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          React
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          Css
                        </Badge>
                      </div>
                    </Card.Text>
                    <div className="d-flex flex-row gap-8">
                      <Button
                        style={{ backgroundColor: "#f61ff3" }}
                        className="border-0"
                      >
                        <a href="https://food-delivery-app-phi-ebon.vercel.app/">
                          {" "}
                          View project
                        </a>
                      </Button>
                      <Button className="ms-3 text-bg-dark border-0">
                        <FaGithub />
                        <a
                          href="https://github.com/thasneem1997/food-delivery-app/"
                          className="ms-1 mt-2"
                        >
                          Git Hub
                        </a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item style={{ border: "none" }}>
          <div className="portfolio" id="portfolio" data-aos="fade-up">
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <Card style={{ width: "20rem", backgroundColor: "black" }}>
                  <Card.Img variant="top" src="images/portfolio3.jpg" />
                  <Card.Body>
                    <Card.Title className="text-light">
                      Grocery Store
                    </Card.Title>
                    <Card.Text>
                      Developed a dynamic grocery e-commerce platform to enhance
                      the shopping experience.
                      <div className="d-flex gap-2 mt-2">
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          React
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          Css
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          {" "}
                          Firebase
                        </Badge>
                      </div>
                    </Card.Text>
                    <div className="d-flex flex-row gap-8">
                      <Button
                        style={{ backgroundColor: "#f61ff3" }}
                        className="border-0"
                      >
                        <a href="#">View project</a>
                      </Button>
                      <Button className="ms-3 text-bg-dark border-0">
                        <FaGithub />
                        <a
                          href="https://github.com/thasneem1997/Grocery-store-site"
                          className="ms-1 mt-2"
                        >
                          Git Hub
                        </a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="portfolio-item">
                <Card style={{ width: "20rem", backgroundColor: "black" }}>
                  <Card.Img variant="top" src="images/portfolio7.png" />
                  <Card.Body>
                    <Card.Title className="text-light">Crypo price</Card.Title>
                    <Card.Text>
                      Crypto Price is a React JS web app that tracks real-time
                      cryptocurrency prices using the CoinGecko API, featuring
                      price charts and a search bar for exploring individual
                      currencies.
                      <div className="d-flex gap-2 mt-2">
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          React
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          Tailwind Css
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          {" "}
                          Coinceko api
                        </Badge>
                      </div>
                    </Card.Text>
                    <div className="d-flex flex-row gap-8">
                      <Button
                        style={{ backgroundColor: "#f61ff3" }}
                        className="border-0"
                      >
                        <a href="https://crypto-price-bice.vercel.app/">
                          View project
                        </a>
                      </Button>
                      <Button className="ms-3 text-bg-dark border-0">
                        <FaGithub />
                        <a
                          href="https://github.com/thasneem1997/crypto_price"
                          target="blank"
                          className="ms-1 mt-2"
                        >
                          Git Hub
                        </a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="portfolio-item">
                <Card style={{ width: "20rem", backgroundColor: "black" }}>
                  <Card.Img variant="top" src="images/portfolio4.png" />
                  <Card.Body>
                    <Card.Title className="text-light">Mentor bee</Card.Title>
                    <Card.Text>
                      Mentor Bee is an office project developed using HTML, CSS,
                      and JavaScript. It is an institutional website designed to
                      meet the needs of educational organizations.
                      <div className="d-flex gap-2 mt-2">
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          Html
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          Css
                        </Badge>
                        <Badge bg="secondary bg-opacity-25 text-light p-2 rounded-pill">
                          {" "}
                          Javascript
                        </Badge>
                      </div>
                    </Card.Text>
                    <div className="d-flex flex-row gap-8">
                      <Button
                        style={{ backgroundColor: "#f61ff3" }}
                        className="border-0"
                      >
                        <a href="https://mentorbeeeduverse.com/">
                          View project
                        </a>
                      </Button>
                      <Button className="ms-3 text-bg-dark border-0">
                        <FaGithub />
                        <a href="#" target="blank" className="ms-1 mt-2">
                          Git Hub
                        </a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Portfolio;
