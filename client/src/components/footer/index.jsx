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
      <p
        style={
          document.documentElement.clientWidth > 480
            ? { color: "#eee", fontSize: "18px", marginLeft: "25px" }
            : { color: "#eee", fontSize: "14px", marginLeft: "15px" }
        }
      >
        Built with passion by Giuseppe Cipriano, aspiring engineer at Mistho.io
      </p>
    </div>
  );
};

export default Footer;
