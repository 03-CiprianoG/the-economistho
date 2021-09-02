import React from "react";

//importing images
import desktopLogo from "../../assets/img/desktop-logo.png";

//importing components
import AnchorButton from "../anchorButton/index";

function UserGate() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          alignItems: "center",
          gap: " 25px",
        }}
      >
        <img src={desktopLogo} style={{ width: "220px" }} alt="" />
        <h1 style={{ fontSize: "18px" }}>
          Please login to access all the articles
        </h1>
        <AnchorButton
          href="/user-login"
          label="Log in"
          style={{
            color: "#fff",
            backgroundColor: "red",
            padding: "8px 15px 8px 15px",
            cursor: "pointer",
            width: "fit-content",
          }}
        />
        <AnchorButton
          href="/user-signup"
          label="You don't have an account yet?, Sign up here!"
        />
      </div>
    </div>
  );
}

export default UserGate;
