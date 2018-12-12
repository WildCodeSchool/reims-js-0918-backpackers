require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const connection = require("../conf");

passport.use(
  new LocalStrategy(
    {
      usernameField: "mail",
      passwordField: "password"
    },
    function(mail, password, cb) {
      connection.query(
        `SELECT id, mail, password FROM users WHERE mail = ? AND password = ?`,
        [mail, password],
        (err, results) => {
          console.log(results);
          if (!results.length) {
            return cb(null, false, { message: "Incorrect mail or password. " });
          } else {
            return cb(null, { mail }, { message: "Logged In Successfully" });
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
      secretOrKey: "your_jwt_secret"
    },
    function(jwtPayload, cb) {
      const user = jwtPayload;
      return cb(null, user);
    }
  )
);
