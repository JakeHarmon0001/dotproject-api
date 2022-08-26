/**
 * model for company_additional table
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
const { TIME } = require("sequelize");

const company_additional = db.sequelize.define(
  "company_additional",
  {
    add_company_id: { type: INTEGER, primaryKey: true },
    add_item_type: { type: INTEGER, primaryKey: true },
    add_item_value: { type: STRING },
  },
  { tableName: "company_additional", timestamps: false }
)

module.exports = { company_additional }