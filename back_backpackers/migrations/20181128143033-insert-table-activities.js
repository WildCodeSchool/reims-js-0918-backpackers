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
    "activities",
    [
      "name",
      "id_creator",
      "price",
      "capacity",
      "id_place",
      "description",
      "contact",
      "eventDate",
      "eventTime"
    ],
    [
      "Visite de la Tokyo Tower",
      1,
      7,
      5,
      1,
      "Cherche petit groupe pour visiter ensemble la Tokyo Tower ce Samedi !",
      "0612345678",
      "2019-06-09",
      "19:23"
    ],
    callback
  );
  db.insert(
    "activities",
    [
      "name",
      "id_creator",
      "capacity",
      "id_place",
      "description",
      "contact",
      "eventDate",
      "eventTime"
    ],
    [
      "Tour du musée de Ueno",
      1,
      3,
      2,
      "Je cherche des gens pour apprécier la culture jap au musée de Ueno !",
      "0612345678",
      "2019-06-20",
      "19:23"
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
