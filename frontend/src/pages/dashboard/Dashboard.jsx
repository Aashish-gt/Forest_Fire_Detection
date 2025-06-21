// Dashboard.jsx
import React, { useEffect, useState, useRef } from "react";
import "./Dashboard.css";
import { FaUserCircle } from "react-icons/fa";

// ✅ Import default images from assets folder
import defaultMapImage from "../../assets/map.png";
import defaultForestImage from "../../assets/dashboard-forest.png";

const Dashboard = () => {
  const [mapImage, setMapImage] = useState("");
  const [forestImage, setForestImage] = useState("");
  const [statusText, setStatusText] = useState("");
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [gasData, setGasData] = useState([]);

  useEffect(() => {
    // ✅ Replace with your real API endpoints
    fetch("/api/map-image")
      .then((res) => res.json())
      .then((data) => setMapImage(data.url))
      .catch(() => setMapImage(defaultMapImage)); // fallback to local image

    fetch("/api/forest-image")
      .then((res) => res.json())
      .then((data) => setForestImage(data.url))
      .catch(() => setForestImage(defaultForestImage));

    fetch("/api/status")
      .then((res) => res.json())
      .then((data) => setStatusText(data.status))
      .catch(() => setStatusText("Status unavailable"));

    fetch("/api/sensor-data")
      .then((res) => res.json())
      .then((data) => {
        setTemperatureData(data.temperature);
        setHumidityData(data.humidity);
        setGasData(data.gas);
      })
      .catch(() => {
        setTemperatureData([]);
        setHumidityData([]);
        setGasData([]);
      });
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
            <p>{statusText}</p>
          </div>
        </div>

        <div className="cards-container">
          <SensorCard title="Temperature" data={temperatureData} color="red" />
          <SensorCard title="Humidity" data={humidityData} color="green" />
          <SensorCard title="Gas" data={gasData} color="gray" />
        </div>
      </main>
    </div>
  );
};

const SensorCard = ({ title, data, color }) => {
  return (
    <div className={`sensor-card ${color}`}>
      <h4>{title}</h4>
      <div className="chart-placeholder">
        {data.length > 0 ? (
          data.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{ height: `${value / 5}px` }}
            ></div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
