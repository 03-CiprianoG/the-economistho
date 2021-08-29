import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Msg, setMsg] = useState("");

  const history = useHistory();

  Axios.defaults.withCredentials = true;

  const loginUser = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
      email: email,
      password: password,
    })
      .then((response) => {
        setMsg(response.data.message);
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
    <div>
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
          gap: "25px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            color: "#fff",
            padding: "10px 25px 10px 25px",
            backgroundColor: "#333",
          }}
        >
          Login
        </h1>
        <input
          style={{ minWidth: "260px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="ds-form-input"
        />
        <input
          style={{ minWidth: "260px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="ds-form-input"
        />
        <button
          style={{
            color: "#fff",
            backgroundColor: "red",
            padding: "10px 25px 10px 25px",
            cursor: "pointer",
          }}
          onClick={(e) => loginUser(e)}
        >
          Submit
        </button>
        <p style={{ color: "#000" }}>{Msg}</p>

        <a style={{ fontSize: "12px" }} href="/user-signup">
          You don't have an account yet? Sign up!
        </a>
      </div>
      <footer
        style={{ marginBottom: "0px", padding: "10px 25px 10px 25px" }}
        className="ds-footer"
      >
        <em>
          Built with passionn by Giuseppe Cipriano, aspiring engineer at
          Mistho.io
        </em>
      </footer>
      <a
        href="/"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translate(-50%)",
          textDecoration: "none",
        }}
      >
        Homepage
      </a>
    </div>
  );
};

export default LoginPage;
