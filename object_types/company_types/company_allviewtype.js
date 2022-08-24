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

const company_allviewtype = new GraphQLObjectType({
  name: "company_allview",
  fields: () => ({
    allview_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true },
    allview_company_id: { type: GraphQLInt },
    allview_uid: { type: GraphQLString },
  })
})

module.exports = { company_allviewtype }
