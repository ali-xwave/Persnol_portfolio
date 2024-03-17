import React from "react";
import "./Home.css";
import img1 from "../assets/way-img.png";
import img2 from "../assets/UX-img.png";
import img3 from "../assets/Food--img.png";
import img4 from "../assets/portfolio.png";
import img5 from "../assets/web.jpg";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div className="second-bg">
      <a name="project">
        <div className="container">
          <div className="row project-p">
            <div>
              <h1 className="text-center text-white">
                Latest<span className="me-color px-2">Projects</span>
              </h1>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="project-img">
                <div class="con">
                  <img src={img1} width="350px" height="220px" />
                  <div class="overlay">
                    <div class="text">
                      <Link
                        to="https://wayfair-e-commerce-website.vercel.app/"
                        className="text-white text-decoration-none fw-bold"
                      >
                        Visit Site
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="project-img">
                <div class="con">
                  <img src={img2} width="350px" height="220px" />
                  <div class="overlay">
                    <div class="text">
                      <Link
                        to="https://ui-ux-designer-portfolio-jkucdsif1-ali-xwave.vercel.app/"
                        className="text-white text-decoration-none fw-bold"
                      >
                        Visit Site
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="project-img">
                <div class="con">
                  <img src={img3} width="350px" height="220px" />
                  <div class="overlay">
                    <div class="text">
                      <Link
                        to="https://food-delivery-landing-page-olive.vercel.app/"
                        className="text-white text-decoration-none fw-bold"
                      >
                        Visit Site
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="project-img">
                <div class="con">
                  <img src={img4} width="350px" height="220px" />
                  <div class="overlay">
                    <div class="text">
                      <Link
                        to="https://portfolio-lemon-zeta-14.vercel.app/"
                        className="text-white text-decoration-none fw-bold"
                      >
                        Visit Site
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="project-img">
                <div class="con">
                  <img src={img5} width="350px" height="220px" />
                  <div class="overlay">
                    <div class="text">
                      <Link
                        to="https://next-2nd-capstone-project.vercel.app/"
                        className="text-white text-decoration-none fw-bold"
                      >
                        Visit Site
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
