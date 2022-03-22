import React from "react";
import { Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import NavBar from "../components/NavBar";
import PopularityChart from "../components/PopularityChart";
import TeamCarousel from "../components/TeamCarousel";

export default function MainPage() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <FAQ />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <TeamCarousel />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <PopularityChart />
        </Col>
      </Row>
    </React.Fragment>
  );
}
