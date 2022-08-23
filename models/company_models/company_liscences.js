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

const company_liscenses = db.sequelize.define(
    "company_liscenses",
    {
      licenses_id: {
        type: INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      company_id: { type: INTEGER },
      item_id: { type: INTEGER },
      purchase_date: { type: DATE },
      start_date: { type: DATE },
      licenses_months: { type: INTEGER, unique: true },
    },
    { tableName: "company_liscenses", timestamps: false }
  )

  module.exports = {company_liscenses}