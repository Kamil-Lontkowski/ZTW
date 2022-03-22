import React, { useState } from "react";
import MainPage from "./views/MainPage";

import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Container fluid>
        <MainPage />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
