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

const company_reseller = db.sequelize.define(
  "company_reseller",
  {
    reseller_id: { type: INTEGER, primaryKey: true },
    reseller_name: { type: STRING },
    reseller_phone: { type: STRING },
    reseller_email: { type: STRING },
  },
  { tableName: "company_reseller", timestamps: false }
)

module.exports = { company_reseller }