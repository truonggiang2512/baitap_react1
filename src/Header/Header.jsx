import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 ">
        <div className="container d-flex ">
          <a href="#" className="navbar-brand">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="#"
                  className="p-2 text-decoration-none nav-link active"
                >
                  {" "}
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="p-2 text-decoration-none nav-link">
                  {" "}
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="p-2 text-decoration-none nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
