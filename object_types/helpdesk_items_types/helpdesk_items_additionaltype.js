/**
 * graphql object type of the helpdesk_items_additional table
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

const helpdesk_items_additionaltype = new GraphQLObjectType({
  name: "helpdesk_items_additional",
  fields: () => ({
    add_item_id: { type: GraphQLInt, primaryKey: true },
    add_item_type: { type: GraphQLInt, primaryKey: true },
    add_item_value: { type: GraphQLString }
  })
})
module.exports = { helpdesk_items_additionaltype }
