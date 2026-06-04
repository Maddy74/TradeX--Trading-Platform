import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  //Check if user is logged in
  const token = localStorage.getItem("token");

  //Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/MyLogo.svg"
            alt="Logo"
            className="logo"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Public Pages */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            {/*  Auth Links */}
            {!token ? (
              <>
                {/* Signup */}
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>

                {/* Login */}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* Dashboard Redirect */}
                <li className="nav-item">
                  <button
                    className="nav-link btn"
                    onClick={() =>
                      (window.location.href = "http://localhost:5174")
                    }
                  >
                    Dashboard
                  </button>
                </li>

                {/* Logout */}
                <li className="nav-item">
                  <button
                    className="nav-link btn text-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
