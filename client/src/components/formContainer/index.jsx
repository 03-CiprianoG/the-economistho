import React, { useState } from "react";

//importing libraries
import Axios from "axios";
import { useHistory } from "react-router";

//importing components
import AnchorButton from "../anchorButton/index";
import Button from "../button/index";
import InputField from "../inputField/index";

const FormContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const history = useHistory();

  Axios.defaults.withCredentials = true;

  // handle the registration form

  const registerUser = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, {
      email: email,
      password: password,
    })

      .then((response) => {
        setResponseMsg(response.data.message);
        setTimeout(() => {
          history.push("/user-login");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle the login form

  const loginUser = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
      email: email,
      password: password,
    })
      .then((response) => {
        setResponseMsg(response.data.message);
        if (response.data.loggedIn) {
          history.push("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        width: "50vw",
        height: "50vh",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          color: "#fff",
          padding: "15px 40px 15px 40px",
          backgroundColor: "#333",
          marginBottom: "25px",
        }}
      >
        {props.formType === "login" ? "Login" : "Signup"}
      </h1>
      <InputField
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        style={{ marginBottom: "25px" }}
      />
      <InputField
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        style={{ marginBottom: "25px" }}
      />
      <Button
        style={{
          color: "#fff",
          backgroundColor: "red",
          padding: "10px 25px 10px 25px",
          cursor: "pointer",
          marginBottom: "25px",
        }}
        handleClick={
          props.formType === "login"
            ? (e) => loginUser(e)
            : (e) => registerUser(e)
        }
        label="Submit"
      />
      <p style={{ color: "#000", marginBottom: "25px" }}>{responseMsg}</p>

      <AnchorButton
        style={{ fontSize: "14px" }}
        href={props.formType === "login" ? "/user-signup" : "/user-login"}
        label={
          props.formType === "login"
            ? "You don't have an account yet? Sign up"
            : "You already have an account? Log in"
        }
      />
    </div>
  );
};

export default FormContainer;
