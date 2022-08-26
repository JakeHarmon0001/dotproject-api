/**
 * graphql object type of the company_assigned_field_tech table
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

const company_assigned_field_techtype = new GraphQLObjectType({
  name: "company_assigned_field_tech",
  fields: () => ({
    ft_id: { type: GraphQLInt },
    company_id: { type: GraphQLInt, primaryKey: true },
    primary_tech: { type: GraphQLInt, primaryKey: true },
  })
})

module.exports = { company_assigned_field_techtype }
