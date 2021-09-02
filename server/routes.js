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

  // This route will gather data from the website and make them accessible through this endpoint
  // if path is the homepage of the website I will pull out the data I need from a script tag which has the articles' list in it
  // otherwise the user should've clicked on one of the article, in order to provide the full article I need to scrape the data
  // tag by tag

  app.post("/fetch-and-scrape", async (req, res) => {
    const baseUri = "https://www.economist.com";
    path = req.body.pathname;

    let articles = [];
    const response = await Axios.post(baseUri + path);
    const $ = cheerio.load(response.data);

    if (path === "/") {
      const obj = $("script[type='application/ld+json']");
      const scrapedItemList = JSON.parse(obj[0].firstChild.data);

      const items = scrapedItemList.itemListElement;

      //sending the articles back to the client
      res.send({ code: 200, articles: items });
    } else {
      //mapping through all the div tags and then pushing to the array the info we need

      articles.push({
        headline: $(".article__headline").text(),
        subheadline: $(".article__subheadline").text(),
        description: $(".article__description").text(),
        image: $(".article__lead-image").find("img").attr("src"),
        time: $(".article__dateline-datetime").text(),
        text: $(".article__body-text").text(),
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

      res.send({ code: 200, articles: sanitizedArticlesArray });
    }
  });
};
