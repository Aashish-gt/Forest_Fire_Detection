import React, { useState } from "react";
import "../../styles/Auth.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/admin/signup",
        formData
      );
      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="container">
        <div className="form-container">
          <h1 className="logo">FireGuard</h1>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i>
                <FaUser />
              </i>
              <input
                type="text"
                name="name"
                placeholder="Organization Name"
                required
                onChange={handleChange}
              />
            </div>
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
            <div className="input-group">
              <i>
                <FaLock />
              </i>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                onChange={handleChange}
              />
            </div>
            <Button className="button" type="submit">
              Submit
            </Button>
            <p className="message">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
