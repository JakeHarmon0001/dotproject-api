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

const helpdesk_items_backup = db.sequelize.define(
    "helpdesk_items_backup",
    {
      item_id: {
        type: INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      item_title: { type: STRING },
      item_summary: { type: TEXT },
      item_calltype: { type: INTEGER, unique: true },
      item_cause: { type: INTEGER },
      item_source: { type: INTEGER, unique: true },
      item_os: { type: STRING },
      item_application: { type: STRING },
      item_priority: { type: INTEGER, unique: true },
      item_severity: { type: FLOAT },
      item_status: { type: INTEGER, unique: true },
      item_assigned_to: { type: INTEGER },
      item_created_by: { type: INTEGER },
      item_notify: { type: INTEGER },
      item_requestor: { type: STRING },
      item_requestor_id: { type: STRING },
      item_requestor_email: { type: INTEGER },
      item_requestor_phone: { type: STRING },
      item_requestor_type: { type: TINYINT },
      item_created: { type: DATE },
      item_modified: { type: DATE },
      item_parent: { type: INTEGER, unique: true },
      item_project_id: { type: INTEGER },
      item_company_id: { type: INTEGER },
      item_requestor_room: { type: STRING },
      item_angel_hotel: { type: STRING },
      item_angel_city: { type: STRING },
      item_log_status: { type: STRING },
      item_staff: { type: STRING },
      item_connection: { type: STRING },
      item_angel_qagent: { type: STRING },
      item_angel_qoutcome: { type: STRING },
      item_angel_qtalk: { type: INTEGER },
      item_angel_qwait: { type: INTEGER },
      item_angel_state: { type: STRING },
      item_angel_expiration: { type: DATE },
      item_angel_queue: { type: INTEGER },
      item_angel_cflow: { type: STRING },
      item_pending: { type: INTEGER },
      item_actiontime: { type: DATE },
      item_action: { type: INTEGER },
      item_accounting: { type: INTEGER },
      item_updated: { type: DATE },
      item_zabbix: { type: INTEGER },
    },
    { tableName: "helpdesk_items_backup", timestamps: false }
  );

module.exports = {helpdesk_items_backup}