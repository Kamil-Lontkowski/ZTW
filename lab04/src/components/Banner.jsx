import React from "react";

import "./Banner.css";
import "../assets/images/drone_banner2.jpg";

export default function Banner() {
  return (
    <div className="banner row">
      <div className="banner__mask row col-12">
        <div className="col-0 col-md-1 d-none d-md-block"></div>
        <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
          <h2 className="display-4 fw-bold text-white">Podróżowanie</h2>
          <hr className="hr" />
          <h4 className="text-white my4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            consequuntu r.
          </h4>
          <button type="button" className="btn btn-outline-light">
            Dowiedz się więcej<i className="fas fa-book ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
