import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a
          className={`navbar-brand ms-5 ${active === "home" ? "active" : ""}`}
          href="#home"
          onClick={() => setActive("home")}
        >
          Hanif
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${active === "home" ? "active" : ""}`}
                onClick={() => setActive("home")}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "exp" ? "active" : ""}`}
                onClick={() => setActive("exp")}
                href="#exp"
              >
                Experiences
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "pro" ? "active" : ""}`}
                onClick={() => setActive("pro")}
                href="#pro"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/hanifkhuzairi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/hanifrejab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:hanifrejab98@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
