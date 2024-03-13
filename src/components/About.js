import React from "react";
import img from "../assets/PC.jpg";
const About = () => {
  return (
    <>
      <div className="second-bg">
        <a name="About">
          <div className="container about-padding">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="pc-img">
                  <img src={img}  />
                </div>
              </div>
              <div className="col-12 col-md-7">
                <div className="text-white">
                  <h1>
                    About <span className="me-color">Me</span>
                  </h1>
                  <p>Frontend Web Developer</p>
                  <p className="text-align">
                    Hi everyone! I am ALI ASGHAR, A passionate frontend
                    developer with 1 year of experience in creating responsive,
                    user-friendly, and visually stunning web applications. I
                    specialize in turning design mockups into pixel-perfect,
                    interactive experiences that engage users and drive results.
                    Experts in HTML, CSS, JavaScript, and modern frontend
                    frameworks/libraries such as React.js Experienced in
                    building responsive and user-friendly websites using
                    Bootstrap and other CSS frameworks. Familiar with version
                    control systems GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default About;
