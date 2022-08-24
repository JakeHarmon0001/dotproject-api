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

const company_resellertype = new GraphQLObjectType({
  name: "company_reseller",
  fields: () => ({
    reseller_id: { type: GraphQLInt, primaryKey: true },
    reseller_name: { type: GraphQLString },
    reseller_phone: { type: GraphQLString },
    reseller_email: { type: GraphQLString },
  })
})

module.exports = { company_resellertype }
