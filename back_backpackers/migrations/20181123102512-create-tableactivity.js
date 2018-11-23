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
    "activities",
    {
      idActivity: { type: "int", primaryKey: true, autoIncrement: true },
      name: { type: "string", length: 255, notNull: true },
      creator: {
        type: "string"
      },
      price: { type: "decimal", length: 50 },
      capacity: { type: "int", length: 50 },
      description: { type: "string", length: 255 },
      contact: { type: "text" },
      date: { type: "date" }
    },
    callback
  );
};

exports.down = function(db, callback) {
  db.dropTable("activities", callback);
};

exports._meta = {
  version: 1
};
