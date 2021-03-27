import React, {useState} from "react";
import "../App.css";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import USP from "./USP";
import Offered from "./OffersComponent";
import Projects from "./LatestPropComponent";
function LandingPage() {

  return (
    <div>
      <Header />
      <USP />
      <Offered />
      <Projects />
      <Footer />
    </div>
  );
}

export default LandingPage;
