import React from "react";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";

export default function MainPage() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <div>MainPage</div>
    </React.Fragment>
  );
}
