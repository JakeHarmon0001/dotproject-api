/**
 * model for company_flag table
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

const company_flag = db.sequelize.define(
  "company_flag",
  {
    company_flag_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    company_flag_nnn: { type: STRING },
    company_flag_name: { type: STRING },
    company_flag_franchisor: { type: INTEGER },
    company_flag_sound: { type: STRING },
    company_flag_color: { type: STRING },
    company_flag_body: { type: STRING },
    company_flag_body: { type: STRING },
    company_flag_ad: { type: STRING },
    company_flag_css: { type: STRING },
    company_flag_terms: { type: STRING },
  },
  { tableName: "company_flag", timestamps: false }
)

module.exports = { company_flag }