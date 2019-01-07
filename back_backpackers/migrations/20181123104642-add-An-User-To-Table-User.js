"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.insert(
    "users",
    [
      "username",
      "birthDate",
      "mail",
      "favorites",
      "hobbies",
      "historic",
      "rights",
      "picture",
      "description",
      "password"
    ],
    [
      "Jeanjean",
      "1995-01-24",
      "jean.dupont@gmail.com",
      0,
      "foot, jeux vidéos",
      0,
      "user",
      "google.com",
      "Je m'appelle Jean Dupont, j'aime le foot et les jeux vidéos dont surtout FIFA 2019. J'aime aussi la randonnée mais seulement en voiture.",
      "2a10$epyqxVloTDZuMeglsT5DX.LQJmnmuZYzU.ZionLqCCYiIPSH7s63u"
    ],
    callback
  );
};

exports.down = function(db, callback) {
  db.removeIndex("users", 1, callback);
};

exports._meta = {
  version: 1
};
