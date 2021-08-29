const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const User = require("../models/User.js");

module.exports = function () {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      function (req, email, password, done) {
        // find a user whose email is the same as the forms email
        // checking if user already exists
        User.findOne({ "local.email": email }, function (err, user) {
          if (err) return done(err);

          // check to see if there is already a user with that email
          if (user) {
            return done(null, false);
          } else {
            // create the user
            var newUser = new User();

            // set the user's local credentials
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);

            // save the user
            newUser.save(function (err) {
              if (err) throw err;
              return done(null, newUser.local);
            });
          }
        });
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      function (req, email, password, done) {
        User.findOne({ "local.email": email }, function (err, user) {
          if (err) return done(err);

          // if no user is found
          if (!user) return done(null, false);

          // if the user is found but the password is wrong
          if (!user.validPassword(password)) return done(null, false);

          // successful logged in
          console.log();
          return done(null, user.local);
        });
      }
    )
  );
};
