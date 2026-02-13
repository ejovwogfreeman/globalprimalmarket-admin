import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Admin Panel</h2>
      <div>
        <Link to="/dashboard" style={{ marginRight: 15, color: "#38bdf8" }}>
          <FaUserCircle /> Dashboard
        </Link>
        <Link to="/" style={{ color: "#38bdf8" }}>
          <FaSignOutAlt /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
