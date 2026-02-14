import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import User from "./pages/User";
import Transactions from "./pages/Transactions";
import Transaction from "./pages/Transaction";
import Deposits from "./pages/Deposits";
import Investments from "./pages/Investments";
import Withdrawals from "./pages/Withdrawals";
import CheckAuth from "./components/CheckAuth"; // <-- import your auth component
import "./App.css";

function App() {
  return (
    <Router>
      {/* Global Toast Container */}
      <ToastContainer />

      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <CheckAuth>
              <Dashboard />
            </CheckAuth>
          }
        />
        <Route
          path="/users"
          element={
            <CheckAuth>
              <Users />
            </CheckAuth>
          }
        />
        <Route
          path="/user/:id"
          element={
            <CheckAuth>
              <User />
            </CheckAuth>
          }
        />
        <Route
          path="/transactions"
          element={
            <CheckAuth>
              <Transactions />
            </CheckAuth>
          }
        />
        <Route
          path="/transaction/:id"
          element={
            <CheckAuth>
              <Transaction />
            </CheckAuth>
          }
        />
        <Route
          path="/deposits"
          element={
            <CheckAuth>
              <Deposits />
            </CheckAuth>
          }
        />
        <Route
          path="/investments"
          element={
            <CheckAuth>
              <Investments />
            </CheckAuth>
          }
        />
        <Route
          path="/withdrawals"
          element={
            <CheckAuth>
              <Withdrawals />
            </CheckAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
