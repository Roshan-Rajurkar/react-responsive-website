import React from "react";
import { NavLink } from "react-router-dom";
function Common(props) {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 py-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>
                  {props.heading}
                  <strong className="brand-name"> Roshan Rajurkar</strong>
                </h1>
                <p className="my-3">
                  A developer who passionate about creating interactive
                  websites.
                </p>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-started">
                    {props.text}
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img
                  src={props.imgsrc}
                  className="img-fluid animated"
                  alt="Home background"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Common;
