import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

import Axios from "axios";
import desktopLogo from "./assets/img/desktop-logo.png";
import misthoLogo from "./assets/img/mistho-logo.png";

import "./App.css";

const App = () => {
  const [rawHTML, setRawHTML] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  const [userEmail, setUserEmail] = useState("");

  Axios.defaults.withCredentials = true;

  const signout = () => {
    Axios.post(`${process.env.REACT_APP_SERVER_URL}/logout`).then(
      (response) => {},
      window.location.reload()
    );
  };

  useEffect(() => {
    Axios.post(`${process.env.REACT_APP_SERVER_URL}/check-user`).then(
      (response) => {
        if (response.data.loggedIn) {
          setLoggedIn(response.data.loggedIn);
          setUserEmail(response.data.userEmail);
        } else {
          setLoggedIn(false);
          setUserEmail("");
        }
      }
    );

    Axios.post(`${process.env.REACT_APP_SERVER_URL}/fetch-html`, {
      pathname: window.location.pathname,
    })
      .then((response) => {
        setRawHTML(response.data.html);

        // Declaring constants after the promise resolves to be sure the state has been already
        // populated and the elements actually inserted into the DOM

        const navbarEl =
          document.getElementsByClassName("ds-layout-masthead")[0].firstChild;
        const signinEl =
          document.getElementsByClassName("ds-navigation-link")[1];

        const headerEl = document.querySelector("header");
        const htmlEl = document.querySelector("html");
        const bodyEl = document.querySelector("body");

        const menuEl = document.getElementsByClassName("ds-menu-disclosure")[0];
        const adContainerEl = document.getElementById("econtop-0");
        const stcEl = document.getElementsByClassName("ds-skip-to-content")[0];
        const searchEl = document.getElementsByClassName(
          "ds-navigation-disclosure"
        )[0];
        const newsletterEl = document.getElementsByClassName(
          "_newsletterContentPromo"
        )[0];
        const footerEl = window.document.querySelector("footer");

        //some javascript code the page needs to work properly

        // change some elements click behaviour to make them work properly

        searchEl.onclick = () => {
          if (searchEl.classList.contains("is-selected")) {
            searchEl.classList.remove(
              "ds-navigation-disclosure--inverse",
              "is-selected"
            );
            headerEl.classList.remove("search-is-open");
            stcEl.classList.remove("ds-skip-to-content--inverse");
            menuEl.classList.remove("ds-menu-disclosure--inverse");
          } else {
            searchEl.classList.add(
              "ds-navigation-disclosure--inverse",
              "is-selected"
            );
            headerEl.classList.add("search-is-open");
            stcEl.classList.add("ds-skip-to-content--inverse");
            menuEl.classList.add("ds-menu-disclosure--inverse");
          }
        };

        menuEl.onclick = () => {
          if (menuEl.classList.contains("is-open")) {
            menuEl.classList.remove("is-open", "ds-menu-disclosure--inverse");
            menuEl.innerText = "MENU";
            stcEl.classList.remove("ds-skip-to-content--inverse");
            headerEl.classList.remove("is-open");
            bodyEl.classList.remove("masthead-is-open");
            htmlEl.classList.remove("masthead-is-open");
          } else {
            menuEl.classList.add("is-open", "ds-menu-disclosure--inverse");
            menuEl.innerText = "CLOSE";
            headerEl.classList.add("is-open");
            bodyEl.classList.add("masthead-is-open");
            htmlEl.classList.add("masthead-is-open");
            stcEl.classList.add("ds-skip-to-content--inverse");
          }
        };

        // change some elements' style and attributes

        signinEl.href = "/user-login";
        signinEl.style = "display: none";
        signinEl.parentElement.appendChild(document.createElement("span"));
        signinEl.parentElement.appendChild(document.createElement("button"));
        signinEl.nextSibling.nextSibling.innerText = "Log out";
        signinEl.nextSibling.nextSibling.onclick = signout;
        signinEl.nextSibling.nextSibling.style =
          " color: #fff; background: red; padding: 5px 10px 5px 10px; cursor: pointer;";
        if (userEmail !== "") {
          signinEl.nextSibling.innerText = `Logged in as: ${userEmail}`;
        }

        signinEl.nextSibling.style = "padding: 10px ";

        adContainerEl.appendChild(document.createElement("a"));
        adContainerEl.firstChild.href = "https://www.mistho.io";
        adContainerEl.firstChild.target = "_blank";
        adContainerEl.firstChild.style =
          "width: 420px; height: 420px; cursor: pointer;";
        adContainerEl.firstChild.appendChild(document.createElement("img"));
        adContainerEl.firstChild.firstChild.src = misthoLogo;
        adContainerEl.firstChild.firstChild.style = "width: 420px";

        while (footerEl.firstChild) {
          footerEl.removeChild(footerEl.firstChild);
        }
        footerEl.appendChild(document.createElement("em"));
        footerEl.firstChild.innerHTML =
          "Built with <3 by Giuseppe Cipriano, aspiring engineer at Mistho.io";

        while (navbarEl.firstChild) {
          navbarEl.removeChild(navbarEl.firstChild);
        }
        navbarEl.appendChild(document.createElement("img"));
        navbarEl.firstChild.src = desktopLogo;
        newsletterEl.style = "display: none";
      })

      .catch((error) => console.log(error));
  }, [loggedIn, userEmail]);

  return (
    <Router>
      <Switch>
        <Route exact path="/user-login" render={(props) => <LoginPage />} />
        <Route exact path="/user-signup" render={(props) => <SignupPage />} />
        <Route
          path="/"
          render={() =>
            rawHTML !== "" ? (
              userEmail !== "" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: rawHTML,
                  }}
                />
              ) : (
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
                  <a
                    href={"/user-login"}
                    style={{
                      color: "#fff",
                      backgroundColor: "red",
                      padding: "5px 15px 5px 15px",
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                  >
                    Log in
                  </a>
                  <a href={"/user-signup"}>
                    You don't have an account yet?, Sign up here!
                  </a>
                </div>
              )
            ) : (
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <img src={desktopLogo} alt="" />
                <h1 style={{ fontSize: "18px" }}>Loading data...</h1>
              </div>
            )
          }
        />
      </Switch>
    </Router>
  );
};

export default App;
