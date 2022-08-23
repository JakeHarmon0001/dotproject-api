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
const { FLOAT } = require("sequelize");
const { CHAR } = require("sequelize");

const helpdesk_item_watchers = db.sequelize.define(
    "helpdesk_item_watchers",
    {
      item_id: { type: INTEGER, primaryKey: true },
      user_id: { type: INTEGER },
      notify: { type: CHAR },
    },
    { tableName: "helpdesk_item_watchers", timestamps: false }
  );
  
module.exports = {helpdesk_item_watchers}