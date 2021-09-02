import React from "react";

// importing images
import desktopLogo from "../../assets/img/desktop-logo.png";

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        gap: "10px",
      }}
    >
      <img src={desktopLogo} alt="" />
      <h1 style={{ fontSize: "18px" }}>Loading data...</h1>
    </div>
  );
};

export default Loader;
