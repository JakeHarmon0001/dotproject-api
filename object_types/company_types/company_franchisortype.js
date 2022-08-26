/**
 * graphql object type of the company_franchisor table
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

const company_franchisortype = new GraphQLObjectType({
  name: "company_franchisor",
  description: "Represents a franchisor working with ovation networks",
  fields: () => ({
    company_franchisor_id: {
      type: GraphQLInt,
      primaryKey: true,
      autoIncrement: true,
      description: "ID of franchisor"
    },
    company_franchisor_name: { type: GraphQLString, description: "Franchisor name" },
  })
})

module.exports = { company_franchisortype }
