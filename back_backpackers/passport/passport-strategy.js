require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const connection = require("../conf");
const bcrypt = require("bcryptjs");

passport.use(
  new LocalStrategy(
    {
      usernameField: "mail",
      passwordField: "password"
    },
    function (mail, password, cb) {
      connection.query(
        `SELECT id, mail, username, password FROM users WHERE mail = ?`,
        mail,
        (err, results) => {
          if (
            results.length < 1 ||
            !bcrypt.compareSync(password, results[0].password)
          ) {
            return cb(null, false, {
              message: "Incorrect mail or password. "
            });
          } else {
            return cb(
              null,
              { mail, username: results[0].username, id: results[0].id },
              { message: "Logged In Successfully" }
            );
          }
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret'
    },
    function (jwtPayload, cb) {
      const user = jwtPayload;
      return cb(null, jwtPayload);
    }
  )
);