/**
 * model for helpdesk_items_additional table
 */
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

const helpdesk_items_additional = db.sequelize.define(
  "helpdesk_items_additional",
  {
    add_item_id: { type: INTEGER, primaryKey: true },
    add_item_type: { type: INTEGER, primaryKey: true },
    add_item_value: { type: STRING }
  },
  { tableName: "helpdesk_items_additional", timestamps: false }
);

module.exports = { helpdesk_items_additional }