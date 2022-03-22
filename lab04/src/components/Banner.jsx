import React from "react";

import "./Banner.css";
import "../assets/images/drone_banner2.jpg";

export default function Banner() {
  return (
    <div className="banner row">
      <div className="banner__mask">
        <div className="h-100 d-flex justify-content-center align-items-center flex-column">
          <h2 className="display-4 fw-bold text-white pt-5">Drony</h2>
          <hr className="col-8 bg-white" />
          <h4 className="text-white my4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            consequuntu r.
          </h4>
          <button type="button" className="btn btn-outline-light">
            Dowiedz się więcej<i className="fas fa-book ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
