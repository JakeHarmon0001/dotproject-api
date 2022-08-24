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

const company_allview = db.sequelize.define(
  "company_allview",
  {
    allview_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    allview_company_id: { type: INTEGER },
    allview_uid: { type: STRING },
  },
  { tableName: "company_allview", timestamps: false }
)


module.exports = { company_allview }