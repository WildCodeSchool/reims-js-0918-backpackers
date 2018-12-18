require("dotenv").config();
const auth = require("./auth/auth");
const express = require("express");
const connection = require("./conf");
const app = express();
const port = 3010;
const cors = require("cors");
const passport = require("passport");
require("./passport/passport-strategy");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/auth", auth);

const currentUserId = 1;

app.use(cors());

app.get("/places", (req, res) => {
  connection.query("SELECT * FROM places", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving places");
    } else {
      res.json(results);
    }
  });
});

app.post("/places", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO places SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Failed to add place");
    } else {
      res.sendStatus(200);
    }
  });
});

app.get("/places/search", (req, res) => {
  const name =
    req.query.name === undefined ? "" : req.query.name.split("_").join(" ");
  const adress =
    req.query.adress === undefined ? "" : req.query.adress.split("_").join(" ");
  console.log(adress);
  connection.query(
    adress === ""
      ? `SELECT * FROM places WHERE name = "${name}"`
      : name === ""
      ? `SELECT * FROM places WHERE adress = "${adress}"`
      : `SELECT * FROM places WHERE name ="${name}" AND adress = "${adress}"`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving place search");
      } else {
        console.log(results);
        res.json(results);
      }
    }
  );
});

app.get("/activities", (req, res) => {
  connection.query(
    `SELECT idActivity, activities.name, id_creator, activities.price, 
    activities.capacity, (activities.picture) AS pictureActivity, 
    (activities.description) AS descriptionActivity, id_place, 
    activities.contact, date, id, country, city, 
    address, type, (places.description) AS descriptionPlace, 
    (places.picture) AS picturePlace 
    FROM activities 
    JOIN places 
    ON activities.id_place = places.id`,
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving activities");
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/activities/search", (req, res) => {
  const name =
    req.query.name === undefined ? "" : req.query.name.split("_").join(" ");
  const creator = req.query.creator === undefined ? "" : req.query.creator;
  connection.query(
    creator === ""
      ? `SELECT * FROM activities WHERE name ="${name}"`
      : name === ""
      ? `SELECT * FROM activities WHERE creator ="${creator}"`
      : `SELECT * FROM activities WHERE name ="${name}" AND creator ="${creator}"`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving activities searched");
      } else {
        console.log(results);
        res.json(results);
      }
    }
  );
});

app.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("connected user", req.user);
    res.send(`authorized for user ${req.user.mail} with an id ${req.user.id}`);
  }
);

app.post(
  "/activities",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id_creator = req.user.id;
    const formData = { ...req.body, id_creator };
    connection.query(
      "INSERT INTO activities SET ? ",
      formData,
      (err, results) => {
        if (err) {
          res.status(500).send("Failed to add activity");
          console.log(err);
        } else {
          res.sendStatus(200);
        }
      }
    );
  }
);

app.get("/activity/:id", (req, res) => {
  const idActivity = req.params.id;
  connection.query(
    `SELECT idActivity, activities.name, id_creator, activities.price, 
    activities.capacity, (activities.picture) AS pictureActivity, 
    (activities.description) AS descriptionActivity, id_place, 
    activities.contact, date, id, country, city, 
    address, type, (places.description) AS descriptionPlace, 
    (places.picture) AS picturePlace 
    FROM activities 
    JOIN places 
    ON activities.id_place = places.id
    WHERE idActivity=?`,
    idActivity,
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving activity");
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/profile", (req, res) => {
  connection.query(
    // `SELECT id, lastname, firstname, birthDate, adress, mail, favorites, hobbies,
    // historic, rights, (users.picture) AS pictureUser, (users.description) AS descriptionUser, idActivity, name,
    // id_creator, price, capacity, (activities.picture) AS pictureActivities, (activities.description) AS descriptionActivities, id_place, contact, date
    // FROM users JOIN activities ON users.id = activities.id_creator WHERE id=?`,
    "SELECT * FROM users WHERE id=?",
    currentUserId,
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving profile");
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/profile/favorite", (req, res) => {
  connection.query(
    "SELECT favorite FROM users WHERE idUser = ?",
    currentUserId,
    (err, results) => {
      if (err) {
        res.status("Error retrieving your favorite activities");
      } else {
        res.json(results);
      }
    }
  );
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened ...");
  }
  console.log(`Server listened on ${port}`);
});
