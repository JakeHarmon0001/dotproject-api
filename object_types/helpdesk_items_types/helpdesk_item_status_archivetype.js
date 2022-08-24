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

const helpdesk_item_status_archivetype = new GraphQLObjectType({
  name: "helpdesk_item_status_archive",
  fields: () => ({
    status_id: { type: GraphQLInt, autoIncrement: true, primaryKey: true },
    status_item_id: { type: GraphQLInt },
    status_code: { type: GraphQLInt },
    status_date: { type: GraphQLString },
    status_modified_by: { type: GraphQLInt },
    status_comment: { type: GraphQLString }
  })
})

module.exports = { helpdesk_item_status_archivetype }
