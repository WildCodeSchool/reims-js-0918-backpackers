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
      id_creator: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: "activities_users_creator_id_fk",
          table: "users",
          rules: {
            onDelete: "CASCADE"
          },
          mapping: "id"
        }
      },
      price: { type: "decimal", length: 50 },
      capacity: { type: "int", length: 50, notNull: true },
      picture: { type: "text" },
      idChat: { type: "int", length: 20 },
      description: { type: "string", length: 255 },
      id_place: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: "activities_places_id_fk",
          table: "places",
          rules: {
            onDelete: "CASCADE"
          },
          mapping: "id"
        }
      },
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
