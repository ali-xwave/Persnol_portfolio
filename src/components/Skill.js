import React from "react";

const Skill = () => {
  return (
    <div>
      <div className="bg-color">
        <a name="Skill">
          <div className="container">
            <div className="row text-center skill-p">
              <div className="pb-3">
                <h1 className="text-white text-center">
                  My<span className="me-color px-2">Skills</span>
                </h1>
              </div>
              <div className="col-6 col-md-4">
                <div className="text-warning">
                  <span className="fs-1">HTML</span>
                  <br />
                  <i class="fa-brands fa-html5 style-logo"></i>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="text-primary">
                  <span className="fs-1">CSS</span>
                  <br />
                  <i class="fa-brands fa-css3-alt style-logo"></i>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="text-warning">
                  <span className="fs-1">JavaScript</span>
                  <br />
                  <i class="fa-brands fa-js style-logo me-color"></i>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="Boot-color">
                  <span className="fs-1">Bootstrap</span>
                  <br />
                  <i class="fa-brands fa-bootstrap style-logo img-fluid"></i>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="React-color">
                  <span className="fs-1">React</span>
                  <br />
                  <i class="fa-brands fa-react style-logo"></i>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="Git-color">
                  <span className="fs-1">GitHub</span>
                  <br />
                  <i class="fa-brands fa-github style-logo"></i>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Skill;
