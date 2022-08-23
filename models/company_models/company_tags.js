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

const company_tags = db.sequelize.define(
    "company_tags",
    {
      company_id: { type: INTEGER, primaryKey: true },
      contact_id: { type: INTEGER, primaryKey: true },
    },
    { tableName: "company_tags", timestamps: false }
  )

  module.exports = {company_tags}