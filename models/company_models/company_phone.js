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

const company_phone = db.sequelize.define(
  "company_phone",
  {
    cphone_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    cphone_number: { type: INTEGER },
    cphone_company: { type: INTEGER },
    cphone_type: { type: INTEGER },
  },
  { tableName: "company_phone", timestamps: false }
)

module.exports = { company_phone }