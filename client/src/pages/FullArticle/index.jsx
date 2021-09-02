import React from "react";

//importing components
import Navbar from "../../components/navbar/index";
import AdContainer from "../../components/adContainer";

//importing images
import misthoLogo from "../../assets/img/mistho-logo.png";
import Footer from "../../components/footer";

const FullArticle = (props) => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <AdContainer adImg={misthoLogo} />
      <Navbar userEmail={props.userEmail} />
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: " column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "flex-start",
          margin: "25px auto 25px auto",
        }}
      >
        <span
          style={{
            color: "#E2130C",
            fontWeight: "500",
            fontSize: "18px",
            marginBottom: "4px",
          }}
        >
          {props.article.subheadline}
        </span>
        <span
          style={{
            color: "#000",
            fontWeight: "500",
            fontSize: "36px",
            marginBottom: "4px",
          }}
        >
          {props.article.headline}
        </span>
        <h2
          style={{
            color: "#000",
            fontWeight: "500",
            fontSize: "20px",
            marginTop: "35px",
          }}
        >
          {props.article.description}
        </h2>
        <img
          style={{
            marginTop: "30px",
            borderBottom: "1px solid rgba(0,0,0, 0.15)",
            paddingBottom: "30px",
          }}
          src={props.article.image}
          alt=""
        />
        <p
          style={{
            color: "#000",
            opacity: "0.6",
            fontWeight: "600",
            fontSize: "14px",
            paddingTop: "15px",
          }}
        >
          {props.article.time}
        </p>
        <p
          style={{
            color: "#000",
            opacity: "0.8",
            fontWeight: "500",
            fontSize: "22px",
            marginTop: "40px",
          }}
        >
          {props.article.text}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default FullArticle;
