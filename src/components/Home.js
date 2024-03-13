import React from "react";
import "./Home.css";
import img from "../assets/front-end-developer.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <a name="Home">
        <div className="bg-color text-white home-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 text-center">
                <span className="fs-1 fw-bold ">
                  Hello, It's<span className="me-color px-2">Me</span>
                </span>
                <h1 className="txt-size">ALI ASGHAR</h1>
                <p className="title-size">
                  I am a{" "}
                  <span className="me-color">Fronted & React.Js Developer</span>
                </p>
                <div className="pb-3">
                  <Link to="https://github.com/ali-xwave" className="me-color">
                    <i className="fa-brands fa-github fs-1"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/ali-asghar-xwave/"
                    className="me-color"
                  >
                    <i className="fa-brands fa-linkedin fs-1 px-4"></i>
                  </Link>
                </div>
                <button className="bg-primary rounded-pill border-0 px-3 py-2 text-white fs-5">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Home;
