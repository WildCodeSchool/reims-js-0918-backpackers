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
  db.createTable(
    "places",
    {
      idPlace: { type: "int", primaryKey: true, autoIncrement: true },
      name: { type: "string", length: 255, notNull: true },
      adress: { type: "text", notNull: true },
      price: { type: "decimal", length: 50 },
      type: { type: "string", length: 100, notNull: true },
      capacity: { type: "int", length: 50 },
      description: { type: "text" },
      contact: { type: "text" }
    },
    callback
  );
};

exports.down = function(db, callback) {
  db.dropTable("places", callback);
};

exports._meta = {
  version: 1
};
