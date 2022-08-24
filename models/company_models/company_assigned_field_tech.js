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

const company_assigned_field_tech = db.sequelize.define(
  "company_assigned_field_tech",
  {
    ft_id: { type: INTEGER },
    company_id: { type: INTEGER, primaryKey: true },
    primary_tech: { type: TINYINT, primaryKey: true },
  },
  { tableName: "company_assigned_field_tech", timestamps: false }
)

module.exports = { company_assigned_field_tech }