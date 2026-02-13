import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaUsers,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaWallet,
  FaArrowDown,
} from "react-icons/fa";
import "../App.css";

const Dashboard = () => {
  // Dummy data for demo
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [deposits, setDeposits] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    // Simulate fetching data
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
        <h2>Dashboard</h2>

        {/* Summary Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: 20,
            marginTop: 20,
          }}
        >
          <div className="card">
            <h3>
              <FaUsers /> Users
            </h3>
            <p>Total Users: {users.length}</p>
          </div>
          <div className="card">
            <h3>
              <FaExchangeAlt /> Transactions
            </h3>
            <p>Total Transactions: {transactions.length}</p>
          </div>
          <div className="card">
            <h3>
              <FaMoneyBillWave /> Deposits
            </h3>
            <p>Total Deposits: {deposits.length}</p>
          </div>
          <div className="card">
            <h3>
              <FaWallet /> Investments
            </h3>
            <p>Total Investments: {investments.length}</p>
          </div>
          <div className="card">
            <h3>
              <FaArrowDown /> Withdrawals
            </h3>
            <p>Total Withdrawals: {withdrawals.length}</p>
          </div>
        </div>

        {/* Users Table */}
        <div className="card">
          <h3>All Users</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Transactions Table */}
        <div className="card">
          <h3>All Transactions</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.id}</td>
                  <td>{tx.type}</td>
                  <td>${tx.amount}</td>
                  <td>{tx.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deposits Table */}
        <div className="card">
          <h3>All Deposits</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((d) => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.user}</td>
                  <td>${d.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Investments Table */}
        <div className="card">
          <h3>All Investments</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {investments.map((inv) => (
                <tr key={inv.id}>
                  <td>{inv.id}</td>
                  <td>{inv.user}</td>
                  <td>${inv.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Withdrawals Table */}
        <div className="card">
          <h3>All Withdrawals</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((w) => (
                <tr key={w.id}>
                  <td>{w.id}</td>
                  <td>{w.user}</td>
                  <td>${w.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
