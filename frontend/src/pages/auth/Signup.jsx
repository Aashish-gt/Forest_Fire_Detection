import React from "react";
import "../../styles/Auth.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="container">
        <div className="form-container">
          <h1 className="logo">FireGuard</h1>
          <h2>Sign Up</h2>
          <form>
            <div className="input-group">
              <i>
                <FaUser />
              </i>
              <input type="text" placeholder="Organization Name" required />
            </div>
            <div className="input-group">
              <i>
                <FaEnvelope />
              </i>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <i>
                <FaLock />
              </i>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="input-group">
              <i>
                <FaLock />
              </i>
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <Button className="button">Submit</Button>
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
