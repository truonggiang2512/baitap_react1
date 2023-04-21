import React, { Component } from "react";
import "./style.css";
export default class extends Component {
  render() {
    return (
      <div className="container mt-5 ">
        <div className="row gx-lg-5">
          <div className="col-lg-6 col-xxl-4 mb-5 mx-auto">
            <div className="card bg-light border-0 h-100">
              <div className="card-body text-center p-5 p-lg-5 pt-0 pt-lg-0">
                <div className=" d-inline-flex align-items-center justify-content-center w-25 fs-3 h-50 bg-primary bg-gradient text-white rounded-3 mt-n4">
                  <i className="fa-solid fa-ethernet"></i>
                </div>
                <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                <p className="mb-0">
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xxl-4 mb-5">
            <div className="card bg-light border-0 h-100">
              <div className="card-body text-center p-5 p-lg-5 pt-0 pt-lg-0">
                <div className="d-inline-flex align-items-center justify-content-center w-25 fs-3 h-50 bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <i className="fa-brands fa-instalod"></i>
                </div>
                <h2 className="fs-4 fw-bold">Free to download</h2>
                <p className="mb-0">
                  As always, Start Bootstrap has a powerful collectin of free
                  templates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xxl-4 mb-5">
            <div className="card bg-light border-0 h-100">
              <div className="card-body text-center p-5 p-lg-5 pt-0 pt-lg-0">
                <div className="d-inline-flex align-items-center justify-content-center w-25 fs-3 h-50 bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <i className="fa-solid fa-mask"></i>
                </div>
                <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                <p className="mb-0">
                  The heroic part of this template is the jumbotron hero header!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xxl-4 mb-5">
            <div className="card bg-light border-0 h-100">
              <div className="card-body text-center p-5 p-lg-5 pt-0 pt-lg-0">
                <div className="d-inline-flex align-items-center justify-content-center w-25 fs-3 h-50 bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <i className="fa-brands fa-ethereum"></i>
                </div>
                <h2 className="fs-4 fw-bold">Feature boxes</h2>
                <p className="mb-0">
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xxl-4 mb-5">
            <div className="card bg-light border-0 h-100">
              <div className="card-body text-center p-5 p-lg-5 pt-0 pt-lg-0">
                <div className="d-inline-flex align-items-center justify-content-center w-25 fs-3 h-50  bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <i class="fa-solid fa-feather"></i>
                </div>
                <h2 className="fs-4 fw-bold">Simple clean code</h2>
                <p className="mb-0">
                  We keep our dependencies up to date and squash bugs as they
                  come!
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xxl-4 mx-auto mb-5">
            <div className="card bg-light border-0  h-100 ">
              <div className="card-body p-5 p-lg-5 mx-auto pt-0 pt-lg-0 text-center">
                <div className=" d-inline-flex align-items-center justify-content-center w-25 mt-n4 fs-3 bg-primary text-white mx-auto h-50 rounded mb-4">
                  <i className="fa-solid fa-plane-departure"></i>
                </div>
                <h2 className="fs-4 fw-bold">A name you trust</h2>
                <p className="mb-0">
                  Start Bootstrap has been the leader in free Bootstrap
                  templates since 2013!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
