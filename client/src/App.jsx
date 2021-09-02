import React, { useEffect, useState } from "react";

//importing libraries
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";

//importing pages
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Homepage from "./pages/Homepage";
import FullArticle from "./pages/FullArticle";

// importing components
import Loader from "./components/loader/index";
import UserGate from "./components/userGate/index";

//importing styles
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [articles, setArticles] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.post(`${process.env.REACT_APP_SERVER_URL}/check-user`)
      .then((response) => {
        if (response.data.loggedIn) {
          setLoggedIn(response.data.loggedIn);
          setUserEmail(response.data.userEmail);
        } else {
          setLoggedIn(false);
          setUserEmail("");
        }
      })
      .catch((err) => console.log(err));

    Axios.post(`${process.env.REACT_APP_SERVER_URL}/fetch-and-scrape`, {
      pathname: window.location.pathname,
    }).then((response) => {
      setArticles(response.data.articles);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/user-login" exact render={() => <LoginPage />} />
        <Route path="/user-signup" exact render={() => <SignupPage />} />
        <Route
          path="/"
          exact
          render={() =>
            articles.length > 0 ? (
              loggedIn ? (
                <Homepage userEmail={userEmail} articles={articles} />
              ) : (
                <UserGate />
              )
            ) : (
              <Loader />
            )
          }
        />
        <Route
          path="*"
          render={() =>
            articles.length > 0 ? (
              loggedIn ? (
                <FullArticle userEmail={userEmail} article={articles[0]} />
              ) : (
                <UserGate />
              )
            ) : (
              <Loader />
            )
          }
        />
      </Switch>
    </Router>
  );
};

export default App;
