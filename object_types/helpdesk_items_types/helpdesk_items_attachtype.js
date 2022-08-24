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

const helpdesk_items_attachtype = new GraphQLObjectType({
  name: "helpdesk_items_attach",
  fields: () => ({
    attach_id: { type: GraphQLInt, autoIncrement: true, primaryKey: true },
    attach_type: { type: GraphQLInt },
    attach_attached_id: { type: GraphQLInt },
    attach_role: { type: GraphQLInt },
    attach_date_created: { type: GraphQLString },
    attach_date_updated: { type: GraphQLString },
    attach_attached_by: { type: GraphQLString },
    attach_note: { type: GraphQLString }
  })
})

module.exports = { helpdesk_items_attachtype }
