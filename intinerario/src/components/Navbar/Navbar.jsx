import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
          <nav
    
            className="navbar navbar-expand-xxl navbar-light " 
          >
            <div className="container-xl mt-2">
              <Link className="navbar-brand" to="/"> 
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main-nav"
                aria-controls="main-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center align-center "
                id="main-nav"
              >
                <ul className="navbar-nav ">
                  <li className="nav-item fs-5 p-2">
                    <Link className=" text-light btn btn-dark btn-lg" to="/">
                      Friday
                    </Link>
                  </li>
                  <li className="nav-item fs-5 p-2">
                    <Link className="text-light btn btn-dark btn-lg" to="/saturday">
                      Saturday
                    </Link>
                  </li>
                  <li className="nav-item fs-5 p-2 ">
                    <Link className="text-light btn btn-dark btn-lg"  to="/sunday">
                      Sunday
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav >
        </>
      );
};
export default Navbar;
