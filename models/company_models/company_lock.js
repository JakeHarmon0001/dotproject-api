/**
 * model for company_lock table
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

const company_lock = db.sequelize.define("company_lock", {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  company_id: { type: INTEGER },
  lockedFlag: { type: TINYINT },
  lockedUser: { type: INTEGER },
  lockedMessage: { type: STRING },
  createdAt: { type: TIME },
  modifiedAt: { type: TIME },
},
  { tableName: "company_lock", timestamps: false })


module.exports = { company_lock }