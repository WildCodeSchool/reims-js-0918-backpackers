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
    "places",
    [
      "name",
      "country",
      "city",
      "postCode",
      "address",
      "latitude",
      "longitude",
      "type",
      "picture",
      "description",
      "contact"
    ],
    [
      "Tokyo Tower",
      "Japon",
      "Tokyo",
      "33-23512",
      "4 Chome-2-8 Shibakoen",
      "35.658611",
      "139.745556",
      "Culturel",
      "default.png",
      "La tour Eiffel Japonaise ! Une géante structure rouge et blanche. Endroit incontournable à visiter à Tokyo!",
      "tél : +81 3-3433-5111"
    ],
    callback
  );
  db.insert(
    "places",
    [
      "name",
      "country",
      "city",
      "postCode",
      "address",
      "latitude",
      "longitude",
      "price",
      "type",
      "capacity",
      "picture",
      "description",
      "contact"
    ],
    [
      "Musée national de Tokyo",
      "Japon",
      "Tokyo",
      "10-11234",
      "13-9 Uenokoen, Taito-ku",
      "35.718814",
      "139.776498",
      "4.83",
      "Culturel",
      "10",
      "default.png",
      "Le musée national de Tokyo avec un parcours chronologique retraçant l’évolution de l’art japonais mêlée à l’histoire très ancienne de la civilisation nippone..",
      "tél : +81 3-3822-1111"
    ],
    callback
  );
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  version: 1
};
