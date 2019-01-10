require("dotenv").config();
const auth = require("./auth/auth");
const express = require("express");
const connection = require("./conf");
const app = express();
const port = 3010;
const cors = require("cors");
const passport = require("passport");
const index = require("./auth/index");
require("./passport/passport-strategy");

app.use(express.static(__dirname + "/public"));
const Chatkit = require("@pusher/chatkit-server");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/auth", auth);
app.use("/", index);

const chatkit = new Chatkit.default({
  instanceLocator: process.env.CHAT_INSTANCE_LOCATOR,
  key: process.env.CHAT_SECRET_KEY
});

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
  const formData = {
    name: req.body.name,
    country: req.body.country,
    city: req.body.city,
    postCode: req.body.postcode,
    address: req.body.address,
    latitude: req.body.lat,
    longitude: req.body.lng,
    price: req.body.price,
    type: req.body.type,
    description: req.body.description
  };
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
    `SELECT activities.idActivity, activities.name, id_creator, activities.price, 
    activities.capacity, (activities.picture) AS pictureActivity, 
    (activities.description) AS descriptionActivity, id_place, 
    activities.contact, date, DATEDIFF(date,CURRENT_TIMESTAMP) as date_diff, id, country, city, 
    address, type, (places.description) AS descriptionPlace, 
    (places.picture) AS picturePlace, COUNT(participation.idParticipation) AS participants
    FROM activities 
    INNER JOIN places 
    ON activities.id_place = places.id 
    LEFT JOIN participation 
    ON activities.idActivity = participation.idActivity 
    GROUP BY activities.idActivity`,
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
    chatkit
      .createRoom({
        creatorId: req.user.username,
        name: req.body.name
      })
      .then(response => {
        const id_creator = req.user.id;
        const idChat = response.id;
        const formData = { ...req.body, id_creator, idChat: idChat };
        connection.query(
          "INSERT INTO activities SET ? ",
          formData,
          (error, results) => {
            if (error) {
              chatkit
                .deleteRoom({
                  id: idChat
                })
                .then(() => res.status(500).send("Failed to add activity"))
                .catch(deleteErr => console.error(deleteErr));
            } else {
              res.json(results.insertId);
            }
          }
        );
      })
      .catch(err => {
        res.status(400).send(err);
      });
  }
);

app.post(
  "/participate/:idActivity",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    connection.query(
      "INSERT INTO participation SET ?",
      { idActivity: req.params.idActivity, idUser: req.user.id },
      (err, results) => {
        if (err) {
          res.status(500).send("Failed to participate to an activity");
          console.log(err);
        } else {
          console.log("test", req.body.idChat, req.user.username);
          chatkit
            .addUsersToRoom({
              roomId: req.body.idChat,
              userIds: [req.user.username]
            })
            .then(() => console.log("added"))
            .catch(error => console.error(error));
        }
      }
    );
  }
);

app.get("/activity/:id", (req, res) => {
  const idActivity = req.params.id;
  connection.query(
    `SELECT activities.idActivity, activities.name, id_creator, activities.price,
            activities.capacity, (activities.picture) AS pictureActivity,
            (activities.description) AS descriptionActivity, id_place,
            activities.contact, date, users.id, country, city,
            address, latitude, longitude, type, (places.description) AS descriptionPlace,
            (places.picture) AS picturePlace, idChat, COUNT(participation.idParticipation) AS participants, users.picture, users.username 
    FROM activities 
    INNER JOIN places 
    ON activities.id_place = places.id
    LEFT JOIN participation
    ON activities.idActivity = participation.idActivity
    LEFT JOIN users
    ON activities.id_creator = users.id
    WHERE activities.idActivity = ?
    GROUP BY activities.idActivity `,
    idActivity,
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving activity");
      }
      if (results.length < 1) {
        res.status(404).send("This activity doesn't exist");
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/place/:id", (req, res) => {
  const idPlace = req.params.id;
  connection.query(
    `SELECT * FROM places WHERE id =? `,
    idPlace,
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving place");
      }
      if (results.length < 1) {
        res.status(404).send("This place doesn't exist");
      } else {
        // res.json(results);
        connection.query(
          `SELECT activities.idActivity, activities.name, id_creator, activities.price,
            activities.capacity, (activities.picture) AS pictureActivity,
            (activities.description) AS descriptionActivity, id_place,
            activities.contact, date, DATEDIFF(date, CURRENT_TIMESTAMP) as date_diff, id, country, city,
            address, type, (places.description) AS descriptionPlace,
            (places.picture) AS picturePlace, COUNT(participation.idParticipation) AS participants
          FROM activities
          INNER JOIN places 
          ON activities.id_place = places.id
          LEFT JOIN participation
          ON activities.idActivity = participation.idActivity
          WHERE id_place = ? 
          GROUP BY activities.idActivity`,
          idPlace,
          (err, actiResults) => {
            if (err) {
              res.status(500).send("Error retrieving activities of this place");
            } else {
              const place = { ...results, activities: actiResults };
              res.json(place);
            }
          }
        );
      }
    }
  );
});

app.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    connection.query(
      // "SELECT id, username, birthDate, adress, mail, favorites, hobbies,historic, rights, (users.picture) AS pictureUser, (users.description) AS descriptionUser, idActivity, name,id_creator, price, capacity, (activities.picture) AS pictureActivities, (activities.description) AS descriptionActivities, id_place, contact, date FROM users JOIN activities ON users.id = activities.id_creator WHERE id=?",

      // "SELECT id, username, birthDate, mail, favorites, hobbies, historic, rights, picture, description, FROM users WHERE id = ?",

      "SELECT * FROM users WHERE id=?",

      // "SELECT users.*, activities.* FROM users JOIN activities ON users.id = activities.id_creator WHERE id=?",

      // console.log("route", req.user.id),
      req.user.id,
      (err, results) => {
        if (err) {
          res.status(500).send("Error retrieving profile");
        } else {
          res.json(results);
        }
      }
    );
  }
);

app.get(
  "/profile/activities",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    connection.query(
      // "SELECT id, username, birthDate, adress, mail, favorites, hobbies,historic, rights, (users.picture) AS pictureUser, (users.description) AS descriptionUser, idActivity, name,id_creator, price, capacity, (activities.picture) AS pictureActivities, (activities.description) AS descriptionActivities, id_place, contact, dateFROM users JOIN activities ON users.id = activities.id_creator WHERE id=?",
      // "SELECT idActivity, name, id_creator, price, capacity, picture, description, id_place, contact, date FROM activities WHERE id_creator = ?",
      "SELECT idActivity, name, id_creator, price, capacity,  (activities.description) AS description, id_place, contact, date FROM activities JOIN users ON activities.id_creator = users.id WHERE id=?",
      // console.log("route", req.user.id),
      req.user.id,
      (err, results) => {
        if (err) {
          res.status(500).send("Error retrieving profile");
        } else {
          res.json(results);
        }
      }
    );
  }
);

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

app.post("/profile/signup", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO users SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Failed to create an account");
    } else {
      res.sendStatus(200);
    }
  });
});

app.post("/users", (req, res) => {
  chatkit
    .createUser({
      name: req.body.username,
      id: req.body.username
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error === "services/chatkit/user_already_exists") {
        res.sendStatus(200);
      } else {
        res.status(error.statusCode).json(error);
      }
    });
});

app.post("/authenticate", (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id
  });
  res.status(authData.status).send(authData.body);
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened ...");
  }
  console.log(`Server listened on ${port}`);
});
