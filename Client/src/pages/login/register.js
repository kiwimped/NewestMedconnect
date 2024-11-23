import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Please enter your full name";
    if (!email) newErrors.email = "Please enter your email";
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!password) newErrors.password = "Please enter a password";
    else if (password.length < 8) {
      newErrors.password = "Password must be 8 characters or longer";
    }
    if (!age || isNaN(age) || age <= 0)
      newErrors.age = "Please enter a valid age";
    if (!dateOfBirth) newErrors.dateOfBirth = "Please enter your date of birth";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      //We will most likely do API call for registration  and it will be added here
      console.log("Form data:", {
        fullName,
        email,
        password,
        age,
        dateOfBirth,
      });
      localStorage.setItem("fullName", fullName);

      alert("Registration successful");
      navigate("/login"); //Redirecting to login
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Register</div>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={fullName}
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{errors.fullName}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{errors.email}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{errors.password}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{errors.age}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={dateOfBirth}
          type="date"
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{errors.dateOfBirth}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          className="inputButton"
          type="button"
          onClick={handleRegister}
          value="Register"
        />
      </div>
    </div>
  );
};

export default Register;
