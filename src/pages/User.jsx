import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/admin/user/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="spinner-wrapper">
        <div className="spinner"></div>
        <p>Loading user...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="spinner-wrapper">
        <p>User not found</p>
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Go Back
        </button>

        <div className="user-card">
          <div className="user-card-header">
            {user.profilePicture?.[0] ? (
              <img
                src={user.profilePicture[0]}
                alt={user.fullName}
                className="user-avatar"
              />
            ) : (
              <div className="user-avatar-initials">
                {user.fullName
                  ? user.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                  : "U"}
              </div>
            )}
            <h2>{user.fullName}</h2>
            <p className="username">@{user.userName}</p>
          </div>

          <div className="user-card-body">
            <div className="user-info">
              <span>Email:</span> <span>{user.email}</span>
            </div>
            <div className="user-info">
              <span>Phone:</span> <span>{user.phoneNumber || "N/A"}</span>
            </div>
            <div className="user-info">
              <span>Country:</span> {user.country || "N/A"}{" "}
              <span> {user.countryFlag || ""}</span>
            </div>
            <div className="user-info">
              <span>Role:</span> <span>{user.role}</span>
            </div>
            <div className="user-info">
              <span>Verified:</span>
              <span> {user.isVerified ? "Yes" : "No"}</span>
            </div>
            <div className="user-info">
              <span>Balance:</span> <span>${user.balance || 0}</span>
            </div>
            <div className="user-info">
              <span>Joined:</span>{" "}
              <span>{new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="user-card-actions">
            <button className="action-btn update-btn">UPDATE</button>
            <button className="action-btn fund-btn">FUND</button>
            <button className="action-btn delete-btn">DELETE</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserDetail;
