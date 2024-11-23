import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!email) newErrors.email = "Please Enter Your Email";
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Please Enter A Valid Email";
    }
    if (!password) newErrors.password = "Please Enter Your Password";
    else if (password.length < 8) {
      newErrors.password = "Please Enter A Valid Password!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      const fullName = localStorage.getItem("fullName") || "John Doe"; // Placeholder full name
      localStorage.setItem("username", fullName);
      alert("Login successful!");
      navigate("/");
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Login</div>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{errors.email}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{errors.password}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          className="inputButton"
          type="button"
          onClick={handleLogin}
          value="Log in"
        />
      </div>
      <br />
      <div>
        Don't have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Register here
        </span>
      </div>
    </div>
  );
};

export default Login;
