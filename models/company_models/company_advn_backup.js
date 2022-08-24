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

const company_advn_backup = db.sequelize.define(
  "company_advn_backup",
  {
    advn_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    advn_company_id: { type: INTEGER },
    advn_guid: { type: STRING },
  },
  { tableName: "company_advn_backup", timestamps: false }
)

module.exports = { company_advn_backup }