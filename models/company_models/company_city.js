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

const company_city = db.sequelize.define(
    "company_city",
    {
      company_city_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      company_city_ccc: { type: STRING },
      company_city_name: { type: STRING },
      company_city_sound: { type: STRING },
    },
    { tableName: "company_city", timestamps: false }
  )

  module.exports = {company_city}