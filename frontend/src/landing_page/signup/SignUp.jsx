import React, { useState } from "react";
import API from "../../utils/api";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Signup Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/api/auth/register", formData);

      alert("Account Created Successfully 🎉 Please Login");

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed ❌");
    }
  };

  return (
    <div className="container" style={{ maxWidth: "500px", marginTop: "60px" }}>
      <h2 className="text-center mb-4">Create Your TradeX Account</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

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
          Sign Up
        </button>
      </form>

      {/* Login Redirect */}
      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignUp;
