const express = require("express")
const router = express.Router()
const  db  = require("../mysql/db.js"); //database variable
const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql
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
  } = require("../sequelize_models/companies.js");
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
  } = require("../sequelize_models/helpdesk_items");
const { makeExecutableSchema } = require('@graphql-tools/schema');

 const schema = {
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String,
        goodbye: String,
        companies: String
      },
    
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello from Yoga!',
        goodbye: () => 'goodbye from yoga',
        companies:() => 'companies test'
      },
    },
  }

  const schema2 = {
    typeDefs: /* GraphQL */ `
      type Query {
        test: String
      },
    
    `,
    resolvers: {
      Query: {
        test: () => 'test!'
      },
     
    },
  }

 module.exports = {router,schema, schema2}