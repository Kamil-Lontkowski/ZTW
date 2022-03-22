import React from "react";
import { Image, Row, Col, Card } from "react-bootstrap";

import drone2 from "../assets/images/drone_banner.jpg";

export default function Obrazek() {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-3">
          <Image fluid src={drone2} className="card-img" alt="..." />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
