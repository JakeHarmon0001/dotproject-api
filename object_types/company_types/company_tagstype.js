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

const company_tagstype = new GraphQLObjectType({
  name: "company_tags",
  fields: () => ({
    company_id: { type: GraphQLInt, primaryKey: true, },
    contact_id: { type: GraphQLInt, primaryKey: true },
  })
})
module.exports = { company_tagstype }
