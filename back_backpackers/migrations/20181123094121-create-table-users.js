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
    "users",
    {
      idUser: { type: "int", primaryKey: true, autoIncrement: true },
      lastName: { type: "string", length: 100, notNull: true },
      firstName: { type: "string", length: 100, notNull: true },
      birthDate: { type: "date", notNull: true },
      adress: { type: "text", notNull: true },
      mail: { type: "string", length: 100 },
      favorites: {
        type: "int",
        foreignKey: {
          name: "favorite_activity",
          table: "activities",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: {
            activity_id: "id"
          }
        }
      },
      hobbies: { type: "string", length: 50 },
      historic: {
        type: "int",
        foreignKey: {
          name: "historic_activity",
          table: "activities",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT"
          },
          mapping: {
            activity_id: "id"
          }
        }
      },
      rights: { type: "string", length: 50 },
      picture: { type: "text" },
      description: { type: "string", length: 255 }
    },
    callback
  );
};

exports.down = function(db, callback) {
  db.dropTable("users", callback);
};

exports._meta = {
  version: 1
};
