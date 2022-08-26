/**
 * graphql object type of the helpdesk_item_watcherstype table
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

const helpdesk_item_watcherstype = new GraphQLObjectType({
  name: "helpdesk_item_watchers",
  fields: () => ({
    item_id: { type: GraphQLInt },
    user_id: { type: GraphQLInt },
    notify: { type: GraphQLString }
  })
})

module.exports = { helpdesk_item_watcherstype }
