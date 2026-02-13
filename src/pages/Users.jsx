import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import "./users.css"; // make sure you have a CSS file

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/admin/all-users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Loading spinner
  if (loading) {
    return (
      <div className="spinner-wrapper">
        <div className="spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>All Users</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Full Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Verified</th>
                <th>Date Joined</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td data-label="S/N">{index + 1}</td>
                  <td data-label="Full Name">{user.fullName}</td>
                  <td data-label="Username">{user.userName}</td>
                  <td data-label="Email">{user.email}</td>
                  <td data-label="Role">{user.role}</td>
                  <td data-label="Verified">
                    {user.isVerified ? "Yes" : "No"}
                  </td>
                  <td data-label="Date Joined">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td data-label="Action">
                    <Link className="view-btn" to={`/user/${user._id}`}>
                      View User
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Users;
