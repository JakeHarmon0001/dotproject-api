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

const company_field_techs = db.sequelize.define(
  "company_field_techs",
  {
    ft_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    ft_company_name: { type: STRING },
    ft_company_number: { type: STRING },
    ft_name: { type: STRING },
    ft_contact_number: { type: STRING },
    ft_secondary_number: { type: STRING },
    ft_available_days: { type: TINYINT },
    ft_available_hours_weekday: { type: STRING },
    ft_available_hours_weekend: { type: STRING },
    ft_hourly_rate_weekday: { type: DECIMAL },
    ft_hourly_rate_weekend: { type: DECIMAL },
    ft_notes: { type: STRING },
  },
  { tableName: "company_field_techs", timestamps: false }
)
module.exports = { company_field_techs }