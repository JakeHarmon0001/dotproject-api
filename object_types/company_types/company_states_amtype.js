/**
 * graphql object type of the company_states_am table
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

const company_states_amtype = new GraphQLObjectType({
  name: "company_states_am",
  fields: () => ({
    company_state_id: { type: GraphQLString },
    company_state_am: { type: GraphQLInt },
  })
})

module.exports = { company_states_amtype }
