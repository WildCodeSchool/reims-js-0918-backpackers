"use strict";

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
  db.createTable(
    "places",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      name: { type: "string", length: 255, notNull: true },
      country: { type: "string", length: 100, notNull: true },
      city: { type: "string", length: 100, notNull: true },
      address: { type: "text", notNull: true },
      latitude: { type: "float", notNull: true },
      longitude: { type: "float", notNull: true },
      price: { type: "decimal", length: 50 },
      type: { type: "string", length: 100, notNull: true },
      capacity: { type: "int", length: 50 },
      picture: { type: "text" },
      description: { type: "string", length: 255 },
      contact: { type: "text" }
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable("places", callback);
};

exports._meta = {
  version: 1
};
