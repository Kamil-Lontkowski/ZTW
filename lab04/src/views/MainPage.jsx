import React from "react";
import { Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import NavBar from "../components/NavBar";
import PopularityChart from "../components/PopularityChart";
import TeamCarousel from "../components/TeamCarousel";
import Form from "../components/form";
import Maps from "../components/maps";

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
<<<<<<< HEAD
      <Row>
        <Form />
      </Row>
      <Row>
        <Maps />
      </Row>
      <Row>
=======
      <hr className="border-dark" />
      <Row className="m-md-3 mt-3">
        <h2 className="mb-3 text-center">Nasi pracownicy</h2>
>>>>>>> ep
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
    </React.Fragment>
  );
}
