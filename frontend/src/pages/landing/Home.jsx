import React from "react";
import "../../assets/background-image.png";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero-container">
      <Navbar />
        <div className="hero-content">
          <h1 className="project-title">
            IoT-Based Forest Fire <br /> Detection System
          </h1>
          <p className="project-caption">
            Powered by TinyML and smart sensors to protect nature,
            <br /> wildlife, and communities with real-time fire detection.
          </p>
          <Button className="learn-more">Learn More</Button>
        </div>
      </section>
    </>
  );
}

export default Home;
