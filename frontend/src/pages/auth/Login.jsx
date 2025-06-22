import React, { useState } from "react";
import "../../styles/Auth.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/admin/login",
        formData
      );
      alert(res.data.message);
      // Save token to localStorage or context if needed
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="form-container">
          <h1 className="logo">FireGuard</h1>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i>
                <FaEnvelope />
              </i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <i>
                <FaLock />
              </i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>
            <Button className="button" type="submit">
              Login
            </Button>
            <p className="message">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
