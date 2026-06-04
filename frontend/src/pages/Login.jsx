import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Login Submit
  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    await API.post("/api/auth/login", formData);

    alert("Login Successful ✅");

    // Redirect to Dashboard app
    window.location.href = "http://localhost:5174";
  } catch (err) {
    alert(err.response?.data?.message || "Login Failed");
  }
};


  return (
    <div className="container" style={{ maxWidth: "500px", marginTop: "60px" }}>
      <h2 className="text-center mb-4">Login to TradeX</h2>

      <form onSubmit={handleLogin}>
        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Button */}
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>

      {/* Signup Redirect */}
      <p className="text-center mt-3">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
