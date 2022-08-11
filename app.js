const express = require("express");
const app = express();
const { createServer } = require("@graphql-yoga/node");
const { createPool } = require("mariadb");
const db = require("./mysql/db.js");
const {
  companies,
  companiesbackup,
  companiesbackup2,
  company_additional,
  company_advn,
  company_advn_backup,
  company_allview,
  company_assigned_field_tech,
  company_city,
  company_field_techs,
  company_flag,
  company_franchisor,
  company_liscenses,
  company_lock,
  company_phone,
  company_reseller,
  company_states,
  company_states_am,
  company_tags,
} = require("./models/companies.js");
const {
  helpdesk_items,
  helpdesk_item_status,
  helpdesk_item_status_archive,
  helpdesk_item_status_backup,
  helpdesk_item_watchers,
  helpdesk_items_additional,
  helpdesk_items_archive,
  helpdesk_items_attach,
  helpdesk_items_backup,
} = require("./models/helpdesk_items");

const {schema} = require("./schemas/schema_companies.js") //schema for companies/related querys  
const server = createServer({
  schema
});


    helpdesk_items.findAll({}).then(function (helpdesk_items) {
      console.log("select_data: " + JSON.stringify(helpdesk_items));
    });


server.start();

