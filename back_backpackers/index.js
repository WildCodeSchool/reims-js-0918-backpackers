require("dotenv").config();
const express = require("express");
const connection = require("./conf");
const app = express();
const port = 3010;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const currentUserId = 42;

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
      res.status(500).send("Failed to add place");
    } else {
      res.sendStatus(200);
    }
  });
});

// connection.query(
//   `SELECT * FROM places WHERE name="${name}" AND adress="${adress}"`,
//   (err, results) => {
//     if (err) {
//       res.status(500).send("Error retrieving place search");
//     } else {
//       res.json(results);
//     }
//   }
// );

app.get("/places/search", (req, res) => {
  const name = req.query.name;
  const adress =
    req.query.adress === undefined ? "" : req.query.adress.split("_").join(" ");
  console.log(adress);
  connection.query(
    adress === ""
      ? `SELECT * FROM places WHERE name = "${name}"`
      : name === undefined
      ? `SELECT * FROM places WHERE adress ="${adress}"`
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
  connection.query("SELECT * FROM activities", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving activities");
    } else {
      res.json(results);
    }
  });
});

app.post("/activities", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO activities SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Failed to add activity");
    } else {
      res.sendStatus(200);
    }
  });
});

app.get("/profile", (req, res) => {
  connection.query(
    "SELECT * FROM users WHERE idUser = ? ",
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
