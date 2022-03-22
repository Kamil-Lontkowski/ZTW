import React from "react";
import { Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import NavBar from "../components/NavBar";
import Obrazek from "../components/Obrazek";
import PopularityChart from "../components/PopularityChart";
import TeamCarousel from "../components/TeamCarousel";
import Form from "../components/form";
import Maps from "../components/maps";
import Quote from "../components/quote";

export default function MainPage() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <Row className="m-md-3 mt-3">
        <h2 className="mb-3 text-center">Dowiedz się więcej</h2>
        <Col md={{ offset: 3, span: 6 }}>
          <FAQ />
        </Col>
      </Row>
      <Row className="m-md-3 mt-3">
        <h2 className="mb-3 text-center">Gdzie jesteśmy</h2>
        <Col md={{ offset: 3, span: 6 }}>
          <Form />
        </Col>
      </Row>
      <Row className="m-md-3 mt-3">
        <h2 className="mb-3 text-center">Napisz do nas</h2>
        <Col md={{ offset: 3, span: 6 }}>
          <Maps />
        </Col>
      </Row>
      <Row className="m-md-3 mt-3">
        <Col md={{ offset: 3, span: 6 }}>
          <Quote />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <TeamCarousel />
        </Col>
      </Row>
      <hr />
      <Row className="m-md-3 mt-3">
        <h2 className="mb-3 text-center">Jaki sprzęt naprawiamy najczęściej</h2>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <PopularityChart />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Obrazek />
        </Col>
      </Row>
    </React.Fragment>
  );
}
