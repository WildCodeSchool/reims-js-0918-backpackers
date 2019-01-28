require("dotenv").config();
const auth = require("./auth/auth");
const express = require("express");
const connection = require("./conf");
const app = express();
const port = 3010;
const cors = require("cors");
const passport = require("passport");
require("./passport/passport-strategy");

app.use(express.static(__dirname + "/public"));
const Chatkit = require("@pusher/chatkit-server");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/auth", auth);

const multer = require("multer");
const upload = multer({
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpg" &&
      file.mimetype !== "image/jpeg"
    ) {
      return cb(null, false);
    } else {
      cb(null, true);
    }
  },
  limits: { fileSize: 3 * 1024 * 1024 },
  dest: "tmp/"
});
const fs = require("fs");

const chatkit = new Chatkit.default({
  instanceLocator: process.env.CHAT_INSTANCE_LOCATOR,
  key: process.env.CHAT_SECRET_KEY
});

const currentUserId = 1;

app.use(cors());

app.get("/api/places", (req, res) => {
  connection.query("SELECT * FROM places", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving places");
    } else {
      res.json(results);
    }
  });
});

app.post("/api/places", (req, res) => {
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
      res.json(results.insertId);
    }
  });
});

app.post("/api/places/upload/:id", upload.single("monfichier"), (req, res) => {
  currentDate = new Date()
    .toLocaleString()
    .split(":")
    .join("")
    .split(" ")
    .join("-");
  fs.rename(
    req.file.path,
    "public/api/images/" + currentDate + req.file.originalname,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        connection.query(
          `UPDATE places SET picture = "${currentDate +
            req.file.originalname}" WHERE id=?`,
          req.params.id,
          err => {
            if (err) {
              console.log(err);
            } else {
              res.sendStatus(200);
            }
          }
        );
      }
    }
  );
});

app.get("/api/search", (req, res) => {
  const type = req.query.typeChoice;
  const participation = req.query.placeNumber;
  const keywords = req.query.keywords;
  const city = req.query.city;
  const country = req.query.country;
  const dateStart = req.query.dateStart;
  const dateEnd = req.query.dateEnd;
  const searchArray = [];

  type ? searchArray.push(`type="${type}"`) : "";
  participation ? searchArray.push(`capacityLeft>=${participation}`) : "";
  city ? searchArray.push(`city="${city}"`) : "";
  keywords && keywords.length > 0
    ? searchArray.push(
        "((" +
          keywords
            .split(" ")
            .map(word => `description LIKE "%${word}%"`)
            .join(" AND ") +
          ") OR (" +
          keywords
            .split(" ")
            .map(word => `name LIKE "%${word}%"`)
            .join(" AND ") +
          "))"
      )
    : "";
  // keywords && keywords.length > 0 ? (const wordsQuoted = keyword.map(word => `"${word}"`)) : "";
  country ? searchArray.push(`country="${country}"`) : "";
  dateStart ? searchArray.push(`eventDate>"${dateStart}"`) : "";
  dateEnd ? searchArray.push(`eventDate<="${dateEnd}"`) : "";

  const searchQuery = searchArray.join(" AND ");

  connection.query(
    `SELECT *
    FROM(
    SELECT activities.idActivity, activities.name, activities.capacity, activities.picture as pictureActivity, places.picture as picturePlace,
        (activities.description) AS description, eventDate, DATEDIFF(eventDate,CURRENT_TIMESTAMP) as date_diff, id, country, city, 
        type, (activities.capacity - COUNT(participation.idParticipation)) AS capacityLeft
        FROM activities    
        INNER JOIN places 
        ON activities.id_place = places.id
        LEFT JOIN participation 
        ON activities.idActivity = participation.idActivity
        GROUP BY activities.idActivity
    ) AS searchQuery
    WHERE ${searchQuery}`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving place search");
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/api/activities", (req, res) => {
  connection.query(
    `SELECT activities.idActivity, activities.name, id_creator, activities.price, 
    activities.capacity, (activities.picture) AS pictureActivity, 
    (activities.description) AS descriptionActivity, id_place, latitude,longitude,
    activities.contact, eventDate, DATEDIFF(eventDate,CURRENT_TIMESTAMP) as date_diff, id, country, city, 
    address, type, (places.description) AS descriptionPlace, 
    (places.picture) AS picturePlace, COUNT(participation.idParticipation) AS participants
    FROM activities
    INNER JOIN places 
    ON activities.id_place = places.id 
    LEFT JOIN participation 
    ON activities.idActivity = participation.idActivity
    WHERE DATEDIFF(eventDate,CURRENT_TIMESTAMP)>=0
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

app.post(
  "/api/activities",
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
              res.json({ insertId: results.insertId, id: idChat });
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
  "/api/activities/upload/:id",
  upload.single("monfichier"),
  (req, res) => {
    currentDate = new Date()
      .toLocaleString()
      .split(":")
      .join("")
      .split(" ")
      .join("-");
    fs.rename(
      req.file.path,
      "public/api/images/" + currentDate + req.file.originalname,
      (err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          connection.query(
            `UPDATE activities SET picture = "${currentDate +
              req.file.originalname}" WHERE idActivity= ?`,
            req.params.id,
            err => {
              if (err) {
                console.log("err", err);
              } else {
                res.json(results);
              }
            }
          );
        }
      }
    );
  }
);

app.post(
  "/api/participate/:idActivity",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const idActivity = req.params.idActivity;
    connection.query(
      "INSERT INTO participation SET ?",
      { idActivity: req.params.idActivity, idUser: req.user.id },
      (err, results) => {
        if (err) {
          res.status(500).send("Failed to participate to an activity");
          console.log(err);
        } else {
          chatkit
            .addUsersToRoom({
              roomId: req.body.idChat,
              userIds: [req.user.username]
            })
            .catch(error => console.error(error));
          res.json(idActivity);
        }
      }
    );
  }
);

app.post(
  "/api/participate/remove/:idActivity",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    connection.query(
      `DELETE FROM participation WHERE idActivity=${
        req.params.idActivity
      } AND idUser=${req.user.id}`,
      (err, results) => {
        if (err) {
          res.status(500).send("Failed to unparticipate to an activity");
          console.log(err);
        } else {
          chatkit
            .removeUsersFromRoom({
              roomId: req.body.idChat,
              userIds: [req.user.id]
            })
            .catch(err => console.error(err));
          res.sendStatus(200);
        }
      }
    );
  }
);

app.get("/api/activity/:id", (req, res) => {
  const idActivity = req.params.id;
  connection.query(
    `SELECT activities.idActivity, activities.name, id_creator, activities.price,
            activities.capacity, (activities.picture) AS pictureActivity,
            (activities.description) AS descriptionActivity, id_place,
            activities.contact, eventDate, eventTime, users.id, country, city,DATEDIFF(eventDate, CURRENT_TIMESTAMP) as date_diff,
            address, latitude, longitude, type, (places.description) AS descriptionPlace,
            (places.picture) AS picturePlace, idChat, COUNT(participation.idParticipation) AS participants, users.picture, users.username, users.picture as creator_picture
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

app.get("/api/activity/:id/participants", (req, res) => {
  const idActivity = req.params.id;
  connection.query(
    `SELECT username, id FROM users JOIN participation ON users.id = participation.idUser WHERE participation.idActivity = ?`,
    idActivity,
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des pseudos");
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/api/place/:id", (req, res) => {
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
            activities.contact, eventDate, DATEDIFF(eventDate, CURRENT_TIMESTAMP) as date_diff, id, country, city,
            address, type, (places.description) AS descriptionPlace,
            (places.picture) AS picturePlace, COUNT(participation.idParticipation) AS participants
          FROM activities
          INNER JOIN places 
          ON activities.id_place = places.id
          LEFT JOIN participation
          ON activities.idActivity = participation.idActivity
          WHERE id_place = ? AND eventDate >= CURRENT_TIMESTAMP
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
  "/api/profile",
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
  "/api/profile/:username",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    connection.query(
      "SELECT picture, username, mail, hobbies, description, birthDate FROM users WHERE username=?",

      req.params.username,
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
  "/api/profile/:username/activitiescreated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    connection.query(
      "SELECT idActivity, activities.name, (places.picture) as picturePlace, (activities.picture) AS pictureActivity, id_creator, activities.price, activities.capacity, DATEDIFF(eventDate,CURRENT_TIMESTAMP) as date_diff, (activities.description) AS description, id_place, eventDate FROM activities JOIN users ON activities.id_creator = users.id JOIN places ON places.id=activities.id_place WHERE username=?",
      req.params.username,
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
  "/api/profile/:id/activities",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    connection.query(
      `SELECT participation.idActivity, activities.idActivity, activities.name, id_creator, activities.price, 
    activities.capacity, (activities.picture) AS pictureActivity, 
    (activities.description) AS descriptionActivity, id_place, 
    activities.contact, eventDate, DATEDIFF(eventDate,CURRENT_TIMESTAMP) as date_diff, places.id, country, city, 
    address, type, (places.description) AS descriptionPlace, 
    (places.picture) AS picturePlace
    FROM participation 
    INNER JOIN activities
    ON participation.idActivity = activities.idActivity
    LEFT JOIN users
    ON participation.idUser = users.id
    LEFT JOIN places
    ON activities.id_place = places.id
    WHERE users.id = ?
    GROUP BY activities.idActivity`,
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

app.get("/api/profile/favorite", (req, res) => {
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

app.post("/api/profile/signup", (req, res) => {
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

app.post(
  "/api/profile/:username",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    connection.query(
      `UPDATE users SET description = "${req.body.description}", hobbies = "${
        req.body.hobbies
      }" WHERE username = "${req.params.username}"`,
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Failed to modify profile");
        } else {
          res.sendStatus(200);
        }
      }
    );
  }
);

app.post(
  "/api/profile/:username/upload",
  upload.single("monfichier"),
  (req, res) => {
    currentDate = new Date()
      .toLocaleString()
      .split(":")
      .join("")
      .split(" ")
      .join("-");
    fs.rename(
      req.file.path,
      "public/api/images/" + currentDate + req.file.originalname,
      (err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          connection.query(
            `UPDATE users SET picture = "${currentDate +
              req.file.originalname}" WHERE username = "${
              req.params.username
            }"`,
            err => {
              if (err) {
                console.log(err);
              } else {
                res.sendStatus(200);
              }
            }
          );
        }
      }
    );
  }
);

app.post("/api/users", (req, res) => {
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

app.post("/api/authenticate", (req, res) => {
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
