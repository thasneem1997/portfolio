import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section id="about" data-aos="zoom-in-up">
        <div className="about-image">
          <img src="images/about.gif" />
        </div>
        <div className="about-content">
          <h1>About me</h1>
          <h6>
            {" "}
            I am Fathimath Thasneem, a React.js<br></br> Developer based in
            Kerala, India.
          </h6>
          <p className="mt-2">
            With a Master's in Computer Science from the Institute of Human
            Resources Development, I specialize in creating engaging, responsive
            web applications that enhance user experiences.
          </p>
          <div className="skill-set">
            <div className="about-skill">
              <h3>HTML & CSS</h3>
              <hr
                style={{ width: "70%", marginLeft: "-1px", marginTop: "7px" }}
              ></hr>
            </div>
            <div className="about-skill">
              <h3>React Js</h3>
              <hr
                style={{ width: "50%", marginLeft: "1px", marginTop: "7px" }}
              ></hr>
            </div>
            <div className="about-skill">
              <h3>Javascript</h3>
              <hr
                style={{ width: "70%", marginLeft: "1px", marginTop: "7px" }}
              ></hr>
            </div>
            <div className="about-skill">
              <h3>Next Js</h3>
              <hr
                style={{ width: "30%", marginLeft: "1px", marginTop: "7px" }}
              ></hr>
            </div>
            <div className="about-skill">
              <h3>Php</h3>
              <hr
                style={{ width: "50%", marginLeft: "1px", marginTop: "7px" }}
              ></hr>
            </div>
          </div>
          <br />

          <div className="btnstyle text-light">
            <a
              href="images/fathimath_2024.pdf"
              className="text-light text-decoration-none"
            >
              Download Cv
            </a>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}

export default About;
