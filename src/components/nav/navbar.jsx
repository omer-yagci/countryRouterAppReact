import React from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h4>ReactCountryFinderApp</h4>
          </Link>
          <div className="d-flex  align-items-center ">
            <>
              <button className="ms-2 ">
                <NavLink to="/about">About</NavLink>
              </button>
              <button className="ms-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/omer-yagci"
                >
                  Github
                </a>
              </button>
              <button className="ms-2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/omer-kagan-yagci/"
                >
                  Linkedin
                </a>
              </button>
            </>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
