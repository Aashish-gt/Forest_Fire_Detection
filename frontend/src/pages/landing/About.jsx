import React from "react";
import "../../styles/About.css";
import aboutImg from "../../assets/about.png";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img src={aboutImg} alt="A forest with tall trees." />
      </div>
      <div className="about-main">
        <h2>About the Project</h2>
        <p>
          Forest fires pose a serious threat to wildlife, the environment, and
          nearby communities. Our IoT-based forest fire detection system,
          powered by TinyML, is designed to detect fires early and send
          real-time alerts using low-power, scalable technology. This project
          aims to provide a cost-effective and reliable solution for remote
          forest monitoring.
        </p>
      </div>
    </section>
  );
}

export default About;
