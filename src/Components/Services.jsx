import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <section className="services" id="service">
        <div
          className="sub-head"
          style={{
            display: "inline-block",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <h1 className="heading">My Services</h1>
        </div>
        <div className="sub">
          <div className="sub1">
            <div className="sub-img">
              {/* <i
                className="fa-solid fa-palette fa-3x"
                style={{ color: "#1557e7da" }}
              ></i> */}
            </div>
            <div className="sub-content">
              <h6>Web Application Development</h6>
              <p>
                Crafting modern, scalable web applications using the MERN stack,
                ensuring seamless performance across all devices.{" "}
              </p>
            </div>
          </div>
          <div className="sub1">
            <div className="sub-img">
              {/* <i
                className="fa-solid fa-language fa-3x"
                style={{ color: "#1557e7da" }}
              ></i> */}
            </div>
            <div className="sub-content">
              <h6>Front-end and Back-end Solutions</h6>
              <p>
                Developing robust front-end interfaces with React.js and
                comprehensive back-end services using Node.js and Express.js.
              </p>
            </div>
          </div>
          <div className="sub1">
            <div className="sub-img">
              {/* <i
                className="fa-solid fa-laptop-code fa-3x"
                style={{ color: "#1557e7da" }}
              ></i> */}
            </div>
            <div className="sub-content">
              <h6> Database Management</h6>
              <p>
                Implementing efficient, secure database solutions with MongoDB
                and MySQL to handle complex data needs.
              </p>
            </div>
          </div>
          <div className="sub1">
            <div className="sub-img">
              {/* <i
                className="fa-solid fa-scale-balanced fa-3x"
                style={{ color: "#1557e7da" }}
              ></i> */}
            </div>
            <div className="sub-content">
              <h6>SEO and Digital Marketing Support</h6>
              <p>
                Collaborating with marketing teams to optimize website
                architecture for search engines, enhancing visibility and
                engagement.
              </p>
            </div>
          </div>
          <div className="sub1">
            <div className="sub-img">
              {/* <i
                className="fa-solid fa-vial-circle-check fa-3x"
                style={{ color: "#1557e7da" }}
              ></i> */}
            </div>
            <div className="sub-content">
              <h6>Project Lifecycle Management</h6>
              <p>
                From initial concept through deployment, offering support at
                every stage to ensure project success.
              </p>
            </div>
          </div>
          <div className="sub1">
            <div className="sub-img">
              {/* <i
                className="fa-solid fa-user-tie fa-3x"
                style={{ color: "#1557e7da" }}
              ></i> */}
            </div>
            <div className="sub-content">
              <h6>Cross-cultural Project Coordination</h6>
              <p>
                Utilizing strong communication skills to manage and execute
                projects across geographical and cultural boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
