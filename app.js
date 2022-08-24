/**
 * File that runs the yoga server
 */
const { createServer } = require("@graphql-yoga/node");
const { companies } = require("./models/company_models/companies");
const { schema } = require("./schemas/dotproject_schema.js"); //schema for companies/related querys
const server = createServer({
  // supplying the server with our schema
  schema,
});

//  companies.findAll({}).then(function (companies) {
//    console.log("select_data: " + JSON.stringify(companies));
//  });

server.start();
