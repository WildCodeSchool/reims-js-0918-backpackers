const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/login", function(req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      // console.log("error", err);
      return res.status(400).json({
        message: "Something is not right",
        user: user
      });
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign(user, "your_jwt_secret");
      return res.json({ user, token });
    });
  })(req, res);
});

router.post("/signup", function(req, res, next) {
  connection.query(
    "INSERT INTO users(mail, password, firstName, lastName) VALUES(?,?,?,?)",
    [req.body.mail, req.body.password, req.body.firstName, req.body.lastName],
    function(error, results, fields) {
      if (error) {
        res.status(500).json({ flash: error.message });
      }
      res
        .status(200)
        .json({ flash: "User has been signed up !", type: "success" });
    }
  );
});

module.exports = router;
