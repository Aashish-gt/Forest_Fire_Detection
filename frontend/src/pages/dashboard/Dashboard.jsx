import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { FaUserCircle } from "react-icons/fa";
import defaultMapImage from "../../assets/map.png";
import defaultForestImage from "../../assets/dashboard-forest.png";

const Dashboard = () => {
  const [mapImage, setMapImage] = useState("");
  const [forestImage, setForestImage] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [gas, setGas] = useState(null);
  const [fireStatus, setFireStatus] = useState("");

  useEffect(() => {
    // Map image
    fetch("/api/map-image")
      .then((res) => res.json())
      .then((data) => setMapImage(data.url))
      .catch(() => setMapImage(defaultMapImage));

    // Forest status image
    fetch("/api/forest-image")
      .then((res) => res.json())
      .then((data) => setForestImage(data.url))
      .catch(() => setForestImage(defaultForestImage));

    // Sensor data (latest)
    const fetchSensorData = () => {
      fetch("http://localhost:8080/api/sensors/latest")
        .then((res) => res.json())
        .then((data) => {
          setTemperature(data.temperature);
          setHumidity(data.humidity);
          setGas(data.gas);
          setFireStatus(data.fireDetected ? "🔥 Fire Detected!" : "✅ Normal");
        })
        .catch((err) => {
          console.error("Failed to fetch sensor data", err);
        });
    };

    fetchSensorData();
    const interval = setInterval(fetchSensorData, 10000); // every 10 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1 className="logo">FireGuard</h1>
        <FaUserCircle className="user-icon" />
      </nav>

      <main className="main-content">
        <h2 className="dashboard-title">Dashboard</h2>

        <div className="top-section">
          <div className="map-container">
            <img
              src={mapImage || defaultMapImage}
              alt="Map"
              className="map-image"
            />
          </div>
          <div className="status-card">
            <h3>Status</h3>
            <img
              src={forestImage || defaultForestImage}
              alt="Forest Status"
              className="status-image"
            />
            <p>{fireStatus || "Status unavailable"}</p>
          </div>
        </div>

        <div className="cards-container">
          <SensorCard
            title="Temperature"
            value={temperature !== null ? `${temperature} °C` : "Loading..."}
            color="red"
          />
          <SensorCard
            title="Humidity"
            value={humidity !== null ? `${humidity} %` : "Loading..."}
            color="green"
          />
          <SensorCard
            title="Gas"
            value={gas !== null ? `${gas} ppm` : "Loading..."}
            color="gray"
          />
        </div>
      </main>
    </div>
  );
};

const SensorCard = ({ title, value, color }) => {
  return (
    <div className={`sensor-card ${color}`}>
      <h4>{title}</h4>
      <div className="sensor-value">
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Dashboard;
