import React from "react";
import "../styles.css";
import Landing from "./Landing";
import Services from "./Services";
import Brands from "./Brands";
import Stats from "./Stats";
import Offices from "./Offices";
import Footer from "./Footer";

class Skelet extends React.Component {
  render() {
    return (
      <main>
        <Landing />
        <Services />
        <Brands />
        <Stats />
        <Offices />
        <Footer />
      </main>
    );
  }
}

export default Skelet;
