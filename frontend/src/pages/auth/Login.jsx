import React from "react";
import "../../styles/Auth.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  console.log("This is login page");
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="logo">FireGuard</h1>
        <h2>Sign In</h2>
        <form>
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
          <Button className="button">Login</Button>
          <p className="message">
            Don't have an account? <Link to="./Signup.jsx">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
