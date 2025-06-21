import React from "react";
import Home from "./Home";
import About from "./About";
import KeyFeatures from "./KeyFeatures";
import ContactSection from "./ContactSection";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <>
      <Home />
      <About />
      <KeyFeatures />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;
