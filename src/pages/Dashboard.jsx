import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaUsers,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaWallet,
  FaArrowDown,
  FaRobot,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BASE_URL } from "../data";

console.log(BASE_URL);

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };

        // Fetch users
        const usersRes = await fetch(`${BASE_URL}/admin/all-users`, {
          headers,
        });
        const usersData = await usersRes.json();
        setUsers(usersData.users || []);

        // Fetch transactions
        const transactionsRes = await fetch(
          `${BASE_URL}/admin/all-transactions`,
          {
            headers,
          },
        );
        const transactionsData = await transactionsRes.json();
        setTransactions(transactionsData.transactions || []);

        // Fetch Bots
        const botsRes = await fetch(`${BASE_URL}/admin/all-bots`, {
          headers,
        });
        const botsData = await botsRes.json();
        setBots(botsData.bots || []);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="spinner-wrapper">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  // Filter transactions by type
  const deposits = transactions.filter(
    (t) => t.type.toLowerCase() === "deposit",
  );
  const investments = transactions.filter(
    (t) => t.type.toLowerCase() === "investment",
  );
  const withdrawals = transactions.filter(
    (t) => t.type.toLowerCase() === "withdrawal",
  );

  // Format date/time nicely
  const currentTime = new Date();
  const formattedDateTime = currentTime.toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

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
        <div className="admin-bot">
          <h2>Admin Dashboard</h2>
          <Link to="/create-bot" id="btn" className="btn btn-primary">
            CREATE BOT 🤖
          </Link>
        </div>
        <div style={{ color: "#fff", marginBottom: "30px" }}>
          <p style={{ marginBottom: "5px" }}>
            Welcome to your Admin Dashboard 👋
          </p>
          <p style={{ marginBottom: "5px" }}>
            Current Date & Time: {formattedDateTime}
          </p>
        </div>

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

          {/* Botss Card */}
          <div className="dashboard-card">
            <FaRobot className="card-icon" />
            <h3>Bots</h3>
            <p>Total: {bots.length}</p>
            <Link className="view-btn" to="/bots">
              View Bots
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
