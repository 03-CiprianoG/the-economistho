const passport = require("passport");
const Axios = require("axios");
const cheerio = require("cheerio");

require("./config/passport")(passport);

module.exports = function (app) {
  // Signup-Login system ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  // process the signup form
  app.post("/signup", passport.authenticate("local-signup"), (req, res) => {
    res.send({ code: 200, message: "Your account was succesfully created" });
  });

  // process the login form
  app.post("/login", passport.authenticate("local-login"), (req, res) => {
    res.send({
      code: 200,
      loggedIn: req.isAuthenticated(),
      message: "Successfully loggedIn",
    });
  });

  // logout route
  app.post("/logout", (req, res) => {
    req.logout();
    res.send({ code: 200, loggedIn: req.isAuthenticated() });
  });

  // check user route
  app.post("/check-user", (req, res) => {
    res.send({
      code: 200,
      loggedIn: req.isAuthenticated(),
      userEmail: req.isAuthenticated() ? req.session.passport.user.email : "",
    });
  });

  // Web scraping system :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // Fetching the index.html document dinamically based on the user's current path
  // and sending back to the client

  app.post("/fetch-html", async (req, res) => {
    const baseUri = "https://www.economist.com";
    path = req.body.pathname;
    if (path === "/user-login" || path === "/user-signup") {
      res.send({ code: 200, message: "Not fetching the html" });
    } else {
      Axios.post(baseUri + path)
        .then((response) => {
          res.send({ code: 200, html: response.data });
        })
        .catch((error) => console.log(error));
    }
  });

  // This route will gather data from the website and make them accessible through this endpoint
  // in order to build a sort of Web-Scraping Api Infrastracture for an eventual implementation
  // However in this case these data are not going to be needed.

  app.post("/fetch-and-scrape", async (req, res) => {
    const baseUri = "https://www.economist.com";
    path = req.body.pathname;

    let articles = [];
    const response = await Axios.post(baseUri + path);
    const $ = cheerio.load(response.data);

    //mapping through all the div tags and then pushing to the array the info we need

    $("div")
      .toArray()
      .map((x, i) => {
        articles.push({
          n: i,
          title: $(x).find("h3").text(),
          description: $(x).find("p").text(),
          image: $(x).find("img").attr("src"),
        });
      });

    //sanitizing the articles array

    //removing duplicate
    let titles = articles.map((x) => x.title);
    const firstFiltered = articles.filter(
      ({ title }, i) => !titles.includes(title, i + 1)
    );

    //removing empty
    const sanitizedArticlesArray = firstFiltered.filter((x) => {
      return (
        x.n !== "" && x.title !== "" && x.description !== "" && x.image !== ""
      );
    });

    //sending the articles back to the client
    res.send({ code: 200, articles: sanitizedArticlesArray });
  });
};
