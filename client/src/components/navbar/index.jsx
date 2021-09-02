import React from "react";

//importing libraries
import Axios from "axios";

//importing images
import desktopLogo from "../../assets/img/desktop-logo.png";
import deviceLogo from "../../assets/img/device-logo.png";

//importing components
import Button from "../button/index";
import AnchorButton from "../anchorButton/index";

const Navbar = (props) => {
  // handles logout
  const logout = () => {
    Axios.post(`${process.env.REACT_APP_SERVER_URL}/logout`)
      .then(() => {}, window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <AnchorButton
        href="/"
        img={
          document.documentElement.clientWidth > 480 ? desktopLogo : deviceLogo
        }
        imgStyle={
          document.documentElement.clientWidth > 480
            ? { minWidth: "160px", height: "80px" }
            : { minWidth: "70px", width: "70px", heigth: "70px" }
        }
        style={{
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
      />

      <div
        style={
          document.documentElement.clientWidth > 480
            ? {
                display: "flex",
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-between",
                border: "1px solid #c1c1c1",
                borderLeft: "none",
                borderRight: "none",
                padding: "18px",
                margin: "auto",
              }
            : {
                display: "flex",
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-between",
                border: "1px solid #c1c1c1",
                borderLeft: "none",
                borderRight: "none",
                padding: "6px",
                margin: "auto",
              }
        }
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "auto 0px auto auto",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <h3
            style={
              document.documentElement.clientWidth > 480
                ? { fontSize: "18px" }
                : { fontSize: "14px" }
            }
          >
            {props.userEmail}
          </h3>
          <Button
            style={
              document.documentElement.clientWidth > 480
                ? {
                    color: "#fff",
                    backgroundColor: "red",
                    padding: "8px 15px 8px 15px",
                    cursor: "pointer",
                    width: "fit-content",
                  }
                : {
                    color: "#fff",
                    backgroundColor: "red",
                    padding: "8px 15px 8px 15px",
                    cursor: "pointer",
                    width: "fit-content",
                    fontSize: "12px",
                  }
            }
            handleClick={logout}
            label="Log out"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
