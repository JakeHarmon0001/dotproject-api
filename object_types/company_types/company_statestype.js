const db = require("../../mysql/db.js"); //database variable
const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQL,
  GraphQLList,
} = graphql;

const company_statestype = new GraphQLObjectType({
  name: "company_states",
  description: "A state where Ovation Networks has customers",
  fields: () => ({
    company_state_id: { type: GraphQLString, description: "ID of state" },
    company_state_name: { type: GraphQLString, description: "Name of state" },
    company_state_sound: { type: GraphQLString },
  })
})

module.exports = { company_statestype }
