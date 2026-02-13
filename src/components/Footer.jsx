import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        color: "#38bdf8",
        textAlign: "center",
        padding: "10px 0",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      &copy; {new Date().getFullYear()} Your App Name. All rights reserved.
    </div>
  );
};

export default Footer;
