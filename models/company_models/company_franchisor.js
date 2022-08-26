/**
 * model for company_franchisor table
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

const company_franchisor = db.sequelize.define(
  "company_franchisor",
  {
    company_franchisor_id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    company_franchisor_name: { type: STRING },
  },
  { tableName: "company_franchisor", timestamps: false }
)


module.exports = { company_franchisor }