const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const connection = require("../conf");

router.post("/api/login", function(req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right"
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

router.post("/api/signup", (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 10);
  const formData = {
    ...req.body,
    password: hash
  };
  connection.query("INSERT INTO users SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Failed to create an account");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
