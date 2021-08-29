// npm modules
const Axios = require("axios");
const cookieParser = require("express");
const bodyParser = require("express");
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv").config();
const express = require("express");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");

// initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

//database configuration
const configDB = require("./config/database.js");

//database connection
mongoose.connect(configDB.url, configDB.options);

app.use(
  session({
    genid: () => {
      return uuidv4();
    },
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: [`${process.env.CLIENT_URL}`],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//express app configuration
app.use(cookieParser());
app.use(bodyParser());
app.use(express.json({ limit: "50mb" }));
// routes
require("./routes.js")(app);

// set static file when in production
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
  app.use(express.static(path.join(__dirname, "build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

//telling express which port to listen to
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
