import { useState } from "react";
import { useEffect } from "react";
import { onMessageListener,messaging } from "../services/firebase";
import "./App.css";
import LandingPage from "./pages/landing/LandingPage";
import Dashboard from "./pages/dashboard/Dashboard";
import Dashboard2 from "./pages/dashboard/Dashboard2";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    useEffect(() => {
    const unsubscribe = onMessageListener()
    console.log('unsubscribe: ', unsubscribe)

    return () => {
      unsubscribe()
    };
  }, [messaging]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
      </Routes>
    </Router>
  );
}

export default App;
