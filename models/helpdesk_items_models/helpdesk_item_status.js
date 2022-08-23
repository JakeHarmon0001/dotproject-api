const db = require("../../mysql/db.js"); //database variable
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQL,
  GraphQLList,
} = graphql;

const { STRING } = require("sequelize");
const { TINYINT } = require("sequelize");
const { TEXT } = require("sequelize");
const { DATE } = require("sequelize");
const { BIGINT } = require("sequelize");
const { DECIMAL } = require("sequelize");
const { INTEGER } = require("sequelize");
const { Sequelize, Model, DataTypes } = require("sequelize");
const { FLOAT } = require("sequelize");
const { CHAR } = require("sequelize");

const helpdesk_item_status = db.sequelize.define(
    "helpdesk_item_status",
    {
      status_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
      status_item_id: { type: INTEGER },
      status_code: { type: TINYINT },
      status_date: { type: STRING },
      status_modified_by: { type: INTEGER },
      status_comment: { type: TEXT },
    },
    { tableName: "helpdesk_item_status", timestamps: false }
  );

module.exports = {helpdesk_item_status}