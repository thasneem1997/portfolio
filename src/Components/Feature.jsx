import React, { useEffect, useState } from "react";

function Feature() {
 

  return (
    <div>
      <section className="feature-section" id="feature">
        <div className="feature">
          <div className="item1">
            <div className="fea-content">
              <h3>
                Online <br />
                certification
              </h3>
            </div>
            <div className="fea-image">
              <h1 style={{ fontSize: "55px" }}>4+</h1>
            </div>
          </div>
          <div className="item1">
            <div className="fea-content">
              <h3>
                Projects <br />
                Completed
              </h3>
            </div>
            <div className="fea-image">
              <h1 style={{ fontSize: "55px" }}>60+</h1>
            </div>
          </div>
          <div className="item1">
            <div className="fea-content">
              <h3>
                Years of<br></br> Experience
              </h3>
            </div>
            <div className="fea-image">
              <h1 style={{ fontSize: "55px" }}>2+</h1>
            </div>
          </div>
          <div className="item1">
            <div className="fea-content">
              <h3>Skill Set</h3>
            </div>
            <div className="fea-image">
              <h1 style={{ fontSize: "55px" }}>10+</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
