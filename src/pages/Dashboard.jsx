import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaUsers,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaWallet,
  FaArrowDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Dummy data for demo
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [deposits, setDeposits] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    setUsers([{ id: 1, name: "John Doe", email: "john@example.com" }]);
    setTransactions([
      { id: 1, type: "Deposit", amount: 100, user: "John Doe" },
    ]);
    setDeposits([{ id: 1, user: "John Doe", amount: 100 }]);
    setInvestments([{ id: 1, user: "John Doe", amount: 500 }]);
    setWithdrawals([{ id: 1, user: "John Doe", amount: 50 }]);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        minHeight: "100vh",
        paddingBottom: 50,
      }}
    >
      <Navbar />

      <div className="container">
        <h2 style={{ color: "#fff", marginBottom: 20 }}>Admin Dashboard</h2>

        <div className="dashboard-grid">
          {/* Users Card */}
          <div className="dashboard-card">
            <FaUsers className="card-icon" />
            <h3>Users</h3>
            <p>Total: {users.length}</p>
            <Link className="view-btn" to="/users">
              View Users
            </Link>
          </div>

          {/* Transactions Card */}
          <div className="dashboard-card">
            <FaExchangeAlt className="card-icon" />
            <h3>Transactions</h3>
            <p>Total: {transactions.length}</p>
            <Link className="view-btn" to="/transactions">
              View Transactions
            </Link>
          </div>

          {/* Deposits Card */}
          <div className="dashboard-card">
            <FaMoneyBillWave className="card-icon" />
            <h3>Deposits</h3>
            <p>Total: {deposits.length}</p>
            <Link className="view-btn" to="/deposits">
              View Deposits
            </Link>
          </div>

          {/* Investments Card */}
          <div className="dashboard-card">
            <FaWallet className="card-icon" />
            <h3>Investments</h3>
            <p>Total: {investments.length}</p>
            <Link className="view-btn" to="/investments">
              View Investments
            </Link>
          </div>

          {/* Withdrawals Card */}
          <div className="dashboard-card">
            <FaArrowDown className="card-icon" />
            <h3>Withdrawals</h3>
            <p>Total: {withdrawals.length}</p>
            <Link className="view-btn" to="/withdrawals">
              View Withdrawals
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
