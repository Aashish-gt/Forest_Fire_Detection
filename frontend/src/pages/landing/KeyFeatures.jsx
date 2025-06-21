import React from "react";
import "../../styles/KeyFeatures.css";
import FeaturesCard from "../../components/FeaturesCard";
import { FaFire, FaBatteryFull, FaSatelliteDish } from "react-icons/fa";
import { GiTreehouse, GiBrain } from "react-icons/gi";
import { BsLightbulb } from "react-icons/bs";

function KeyFeatures() {
  return (
    <section className="key-features">
      <h2>Key Features</h2>
      <div className="feature-grid">
        <FeaturesCard
          icon={<FaFire size={40} color="#ff5733" />}
          title="Real-Time Detection"
          description="Monitors smoke, heat, and flame activity using multi-sensor data and camera input processed by TinyML."
        />
        <FeaturesCard
          icon={<FaBatteryFull size={40} color="#77dd77" />}
          title="Low Power Operation"
          description="Powered by battery and solar, allowing long-term use in off-grid forest areas without frequent maintenance."
        />
        <FeaturesCard
          icon={<GiTreehouse size={40} color="#3399ff" />}
          title="Wide Application"
          description="Effective for national parks, community forests, wildlife reserves, and even agroforestry zones."
        />
        <FeaturesCard
          icon={<GiBrain size={40} color="#ff69b4" />}
          title="TinyML Processing"
          description="Performs image classification locally on-device using lightweight machine learning models."
        />
        <FeaturesCard
          icon={<FaSatelliteDish size={40} color="#9999ff" />}
          title="Instant Alerts"
          description="Uses Firebase and GSM to send fire alerts and display real-time status on a live dashboard."
        />
        <FeaturesCard
          icon={<BsLightbulb size={40} color="#ffcc00" />}
          title="Student Innovation"
          description="Designed and developed by Computer Engineering students of Pokhara University as a capstone project."
        />
      </div>
    </section>
  );
}

export default KeyFeatures;
