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

exports.up = function(db, calback) {
  db.createTable("participation", {
    idParticipation: { type: "int", primaryKey: true, autoIncrement: true },
    idActivity: {
      type: "int",
      notNull: true,
      foreignKey: {
        name: "activity_id_fk",
        table: "activities",
        rules: {
          onDelete: "CASCADE"
        },
        mapping: "id"
      }
    },
    idUser: {
      type: "int",
      notNull: true,
      foreignKey: {
        name: "user_id_fk",
        table: "users",
        rules: {
          onDelete: "CASCADE"
        }
      }
    }
  });
};

exports.down = function(db, callback) {
  db.dropTable("participation", callback);
};

exports._meta = {
  version: 1
};
