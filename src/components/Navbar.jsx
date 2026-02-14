import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUsers,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaWallet,
  FaArrowDown,
  FaRobot,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Successful!");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" width="150px" />
      </Link>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
          <FaTachometerAlt style={{ marginRight: 3 }} /> Dashboard
        </Link>

        <Link to="/users" onClick={() => setMenuOpen(false)}>
          <FaUsers style={{ marginRight: 3 }} /> Users
        </Link>

        <Link to="/transactions" onClick={() => setMenuOpen(false)}>
          <FaExchangeAlt style={{ marginRight: 3 }} /> Transactions
        </Link>

        <Link to="/deposits" onClick={() => setMenuOpen(false)}>
          <FaMoneyBillWave style={{ marginRight: 3 }} /> Deposits
        </Link>

        <Link to="/investments" onClick={() => setMenuOpen(false)}>
          <FaWallet style={{ marginRight: 3 }} /> Investments
        </Link>

        <Link to="/withdrawals" onClick={() => setMenuOpen(false)}>
          <FaArrowDown style={{ marginRight: 3 }} /> Withdrawals
        </Link>

        <Link to="/bots" onClick={() => setMenuOpen(false)}>
          <FaRobot style={{ marginRight: 3 }} /> Bots
        </Link>

        <button onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt style={{ marginRight: 3 }} /> Logout
        </button>
      </div>

      {/* Only one hamburger icon */}
      <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
