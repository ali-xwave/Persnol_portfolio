import React from "react";

const Header = () => {
  return (
    <header className="bg-color" style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="text-white navbar-brand fs-1 fw-bold" href="#">
              Portfolio
            </a>
            <button
              className="navbar-toggler text-white white-toggle-button" // Add custom class 'white-toggle-button'
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Skill">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
