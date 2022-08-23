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

const helpdesk_items_attach = db.sequelize.define(
    "helpdesk_items_attach",
    {
      attach_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
      attach_type: { type: INTEGER },
      attach_attached_id: { type: INTEGER },
      attach_role: { type: INTEGER },
      attach_date_created: { type: DATE },
      attach_date_updated: { type: DATE },
      attach_attached_by: { type: STRING },
      attach_note: { type: TEXT },
    },
    { tableName: "helpdesk_items_attach", timestamps: false }
  );

module.exports = {helpdesk_items_attach}