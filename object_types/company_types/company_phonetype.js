/**
 * graphql object type of the company_phone table
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

const company_phonetype = new GraphQLObjectType({
  name: "company_phone",
  fields: () => ({
    cphone_id: { type: GraphQLInt, autoIncrement: true, primaryKey: true },
    cphone_number: { type: GraphQLInt },
    cphone_company: { type: GraphQLInt },
    cphone_type: { type: GraphQLInt },
  })
})

module.exports = { company_phonetype }
