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

const company_additionaltype = new GraphQLObjectType({
  name: "company_additional",
  fields: () => ({
    add_company_id: { type: GraphQLInt, primaryKey: true },
    add_item_type: { type: GraphQLInt, primaryKey: true },
    add_item_value: { type: GraphQLString },
  })
})
module.exports = { company_additionaltype }
