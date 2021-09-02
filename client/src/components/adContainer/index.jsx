import React from "react";

//importing components
import AnchorButton from "../anchorButton/index";

const AdContainer = (props) => {
  return (
    <div
      style={{
        width: " 100vw",
        height: "280px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "16px", marginTop: "10px" }}>Advertisement</p>
      <AnchorButton
        href="https://www.mistho.io"
        target="_blank"
        img={props.adImg}
        style={{
          height: "266px",
          width: "100%",
          display: "inline-flex",
          cursor: "pointer",
        }}
        imgStyle={{
          width: "420px",
          height: "95%",
          margin: "auto",
          position: "relative",
          display: "inline-table",
        }}
      />
    </div>
  );
};

export default AdContainer;
