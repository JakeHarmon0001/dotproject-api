/**
 * graphql object type of the company_advntype table
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

const company_advntype = new GraphQLObjectType({
  name: "company_advn",
  fields: () => ({
    advn_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true },
    advn_company_id: { type: GraphQLInt },
    advn_guid: { type: GraphQLString },
  })
})

module.exports = { company_advntype }
