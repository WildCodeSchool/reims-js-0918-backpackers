'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.insert(
    "places",
    [
      "name",
      "country",
      "city",
      "adress",
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
      "4 Chome-2-8 Shibakoen",
      "35.658611",
      "139.745556",
      "Culturel",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/TaroTokyo20110213-TokyoTower-01.jpg/270px-TaroTokyo20110213-TokyoTower-01.jpg",
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
      "adress",
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
      "13-9 Uenokōen, Taitō-ku",
      "35.718814",
      "139.776498",
      "4.83",
      "Culturel",
      "10",
      "https://tokyohotspots.com/wp-content/uploads/2016/06/3054_tokyo_11.jpg",
      "Le musée national de Tokyo avec un parcours chronologique retraçant l’évolution de l’art japonais mêlée à l’histoire très ancienne de la civilisation nippone..",
      "tél : +81 3-3822-1111"
    ],
    callback
  );
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  "version": 1
};
