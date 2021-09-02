import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#333333",
        width: "100vw",
        height: "5vh",
        padding: "25px 0px 10px 0px",
        justifyContent: "center",
        alignContent: "center",
        justifyItems: "center",
      }}
    >
      <p style={{ color: "#eee", fontSize: "18px", marginLeft: "25px" }}>
        Built with passion by Giuseppe Cipriano, aspiring engineer at Mistho.io
      </p>
    </div>
  );
};

export default Footer;
